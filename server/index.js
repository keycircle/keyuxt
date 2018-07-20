import keystone from 'keystone'
import _ from 'lodash'
import server from './server'

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
