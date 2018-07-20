FROM node:10.6.0-alpine

RUN apk add --no-cache --virtual build-deps make gcc g++ python curl

WORKDIR /keyuxt

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["node", "build/main.js"]