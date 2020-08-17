# Cors proxy

[![Actions Status](https://github.com/devpulsion/corsproxy/workflows/Build%20docker/badge.svg)](https://github.com/devpulsion/corsproxy/actions)
[![Release](https://img.shields.io/github/v/release/devpulsion/corsproxy.svg)](https://github.com/devpulsion/corsproxy/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


A basic docker to proxy request to a server and bypass the cors by providing some origin. Really stupid docker image running the awesome  [cors-anywhere](https://github.com/Rob--W/cors-anywhere).

## Usage

### Usecase

You need to process a http request from your app browser to a server wich has CORS restriction on a domain (from `https://website.com` for example) but your app run on another domain.

You can start the current proxy, and then process all your request from your app to it. It will foward your request by adding a header with the `https://website.com` as origin, and return the response.

### Run

```sh
docker run -it -p 3030:3030 -e DOMAIN=https://website.com  docker.pkg.github.com/devpulsion/corsproxy/basic
```

Then, prepend any url needed `https://website.com` as cors with `http://0.0.0.0:3030/`.

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
