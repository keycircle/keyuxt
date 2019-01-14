const keystone = require('keystone');
const fs = require('fs');
const path = require('path');
const { Nuxt, Builder } = require('nuxt');
const restful = require('restful-keystone')(keystone, {
  root: '/api/v1',
});

const config = {
  ...require('../nuxt.config'),
  dev: process.env.NODE_ENV !== 'production'
};
console.log('dev: ', config.dev);

const nuxt = new Nuxt(config)

module.exports = (app) => {
  console.log('app',app);

  restful.expose({
    Post : ["retrieve", "list"]
  }).start();

  app.use(nuxt.render)

  // Enable live build & reloading on dev
  if (nuxt.options.dev) {
    
    new Builder(nuxt).build();
  }
}
