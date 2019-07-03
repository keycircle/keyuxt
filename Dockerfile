FROM node:12-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD [ "npm", "run", "dev" ]
