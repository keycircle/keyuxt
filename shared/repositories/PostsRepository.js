export default class PostsRepository {
  /**
   * @param {AxiosClient} options.httpClient
   */
  constructor ({ httpClient }) {
    this._httpClient = httpClient
  }

  async get ({ id }) {
    const { data } = await this._httpClient.get(`/api/v1/posts/${id}`)
    return data.post
  }

  async list () {
    const { data } = await this._httpClient.get(`/api/v1/posts`)
    return data.posts
  }
}
