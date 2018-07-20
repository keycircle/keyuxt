import keystone from 'keystone'
import RestfulKeystone from 'restful-keystone'
import nuxt from './nuxt'

/**
 * REST API - Setting a basePath
 * https://github.com/d-pac/restful-keystone#api
 */
const restfulKeystone = RestfulKeystone(keystone, {
  root: '/api/v1'
})

export default function (app) {
  /**
   * REST API - Exposing the models
   * https://github.com/d-pac/restful-keystone#expose
   */
  restfulKeystone
    .expose({
      Post: {
        methods: ['list', 'retrieve'],
        filter: {
          state: 'published'
        },
        populate: 'author'
      },
      PostCategory: {
        methods: ['list', 'retrieve']
      }
    })
    .start()

  /**
   *  NUXT.js as middleware to render the pages
   *  https://nuxtjs.org/api/nuxt-render#nuxt-render-req-res-
   */
  app.use(nuxt.render)
}
