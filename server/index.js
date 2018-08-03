import keystone from 'keystone'
import _ from 'lodash'
import server from './server'

process.env.MONGO_URI = 'mongodb://admin:admin123@ds111012.mlab.com:11012/keyuxt';

/**
 * Keystone CMS Configuration
 * http://keystonejs.com/docs/getting-started/#gettingstarted-startinganewproject
 */
keystone.init({
  name: 'Keystone Boilerplate',
  brand: 'Keystone Boilerplate',
  static: 'public',
  logger: ':method :url :status :response-time ms - :res[content-length]',
  'auto update': false,
  session: true,
  auth: true,
  'user model': 'User',
  compress: true,
  headless: false // true to disable admin
})

/**
 * Keystone CMS Importing the mongoose models
 * http://keystonejs.com/docs/getting-started/#models
 */
keystone.import('../server/models')

keystone.set('cookie secret', process.env.COOKIE_SECRET || 'b6d0b0c630a49084d6e1caf0409ee5c7715155e162f7bcd5283d8071ea25442da4ff9786fd6241709beb6d91805c1681acfa6da5a20612d96d0f110f5abc7f9b')
/**
 * Global view data
 */
keystone.set('locals', {
  _,
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
})

/**
 * Creating routes
 */
keystone.set('routes', server)

/**
 * Keystone CMS Menu customization
 */
keystone.set('nav', {
  posts: ['posts', 'post-categories'],
  enquiries: 'enquiries',
  users: 'users'
})

keystone.start()
