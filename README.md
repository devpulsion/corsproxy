# Cors proxy

A basic docker to proxy request to a server and bypass the cors by providing some origin. Really stupid docker image running the awesome  [cors-anywhere](https://github.com/Rob--W/cors-anywhere).

## Usage

```sh
docker run -it -p 3030:3030 -e DOMAIN=https://google.com  docker.pkg.github.com/devpulsion/corsproxy/basic
```

Then, prepend any url with `http://123.123.123.123:3123/`. It will process your url request with DOMAIN as cors origin, and return it, without requiring cors from your client. Tada.

## Options

Options available through env vars:

| name                 | required | default | description                                         |
|----------------------|----------|---------|-----------------------------------------------------|
| DOMAIN               | yes      |         | the cors domain to provide as origin to bypass cors |
| HOST                 | no       | 0.0.0.0 | host the proxy server run                           |
| PORT                 | no       | 3030    | port the proxy server will listen                   |
| BLACKLIST            | no       |         | comma separated host to blackist                    |
| WHITELIST            | no       |         | comma separated host to whitelist                   |
| REMOVE_HEADERS       | no       |         | comma separated headers to remove                   |
| REDIRECT_SAME_ORIGIN | no       |         | to allow redirect on same origin                    |

## License

MIT
