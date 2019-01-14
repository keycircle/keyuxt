const keystone = require('keystone')
const { sluggify } = require('./utils')

// Configuration
const config = {
  name: process.env.APP_NAME || 'Keyuxt',
  secret: process.env.COOKIE_SECRET || 'secret',
  mongo: process.env.MONGO_URI || 'mongodb://localhost/keyuxt',
  autoUpdate: process.env.AUTO_UPDATE !== 'false',
  port: process.env.PORT || 3000,
  cloudinaryUrl: process.env.CLOUDINARY_URL || 'cloudinary://api_key:api_secret@cloud_name'
}

const { apiKey, apiSecret, cloudName } =
  config.cloudinaryUrl
    ? {
      apiKey: config.cloudinaryUrl.split('://')[1].split(':')[0],
      apiSecret: config.cloudinaryUrl.split(':')[2].split('@')[0],
      cloudName: config.cloudinaryUrl.split('@')[1]
    }
    : {}

keystone.init({
  'name': config.name,
  'brand': config.name,
  'mongo': config.mongo,
  'session store': 'connect-mongo',
  'session store options': { cookie: { maxAge: 36000000 } },
  'auth': true,
  'user model': 'User',
  'cookie secret': config.secret,
  'auto update': config.autoUpdate,
  'port': config.port,
  'cloudinary config': config.cloudinaryUrl,
  'cloudinary cloud name': cloudName,
  'cloudinary api key': apiKey,
  'cloudinary api secret': apiSecret,
  'cloudinary prefix': sluggify(config.name),
  'cloudinary folders': true,
  'cloudinary secure': true,
  'trust proxy': true
})

// Models
keystone.import('models')

// Routes
keystone.set('routes', require('./api'))

// Start KeystoneJS
keystone.start()
