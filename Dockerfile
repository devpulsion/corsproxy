# base
FROM mhart/alpine-node:12.13.1 AS base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# dependancies
FROM base AS dependancies

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN set -ex; \
  if [ "$NODE_ENV" = "development" ]; then \
    yarn install --no-cache --development; \
  else \
    yarn install --no-cache --frozen-lockfile --production; \
  fi;

# build
FROM dependancies AS build

COPY . .

RUN set -ex; \
  if [ "$NODE_ENV" = "development" ]; then \
    echo "Skip production build"; \
  else \
    echo "Production build"; \
    yarn run build; \
  fi;

EXPOSE 3000

CMD ["yarn", "serve"]
