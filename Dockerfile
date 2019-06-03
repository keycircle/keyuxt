FROM node:12.3.1-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD [ "npm", "run", "dev" ]
