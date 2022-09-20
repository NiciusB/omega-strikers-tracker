FROM node:18-alpine as base

WORKDIR /home/node/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN yarn build