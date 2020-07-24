import proxy from 'cors-anywhere';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3030;
const DOMAIN = process.env.DOMAIN || '';

if (!DOMAIN) {
  throw new Error('Expect DOMAIN environement var');
}

const parseEnvList = (env) => !env ? [] : env.split(',').map(v => `${v}`.trim());

proxy.createServer({
  originBlacklist: parseEnvList(process.env.BLACKLIST),
  originWhitelist: parseEnvList(process.env.WHITELIST),
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: parseEnvList(process.env.REMOVE_HEADERS),
  redirectSameOrigin: Boolean(process.env.REDIRECT_SAME_ORIGIN),
  setHeaders: { Origin: DOMAIN, origin: DOMAIN },
}).listen(port, host, () => {
  console.info('Cors proxy is running', { port });
});
