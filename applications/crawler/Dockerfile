FROM node:18-alpine as base

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN yarn build