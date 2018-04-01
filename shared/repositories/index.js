import httpClient from './httpClient'
import PostsRepository from './PostsRepository'

const postsRepository = new PostsRepository({ httpClient })

export { postsRepository }
