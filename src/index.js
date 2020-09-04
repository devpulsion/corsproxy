import proxy from 'cors-anywhere';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3030;
const DOMAIN = process.env.DOMAIN || '';

if (!DOMAIN) {
  throw new Error('Expect DOMAIN environement var');
}

const parseEnvList = (env) => (!env ? [] : env.split(',').map((v) => `${v}`.trim()));
const parseEnvObject = (env) => {
  if (!env) return {};
  try {
    return JSON.parse(env);
  } catch (error) {
    console.error('Parsing env object failed', { error });
    return {};
  }
};

const config = {
  originBlacklist: parseEnvList(process.env.BLACKLIST),
  originWhitelist: parseEnvList(process.env.WHITELIST),
  removeHeaders: parseEnvList(process.env.REMOVE_HEADERS),
  redirectSameOrigin: Boolean(process.env.REDIRECT_SAME_ORIGIN),
  setHeaders: { Origin: DOMAIN, origin: DOMAIN },
  httpProxyOptions: parseEnvObject(process.env.HTTP_PROXY_OPTIONS),
};

proxy.createServer(config).listen(port, host, () => {
  console.info('Cors proxy is running', { port, config });
});
