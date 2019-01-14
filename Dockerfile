FROM node:10.15.0-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
