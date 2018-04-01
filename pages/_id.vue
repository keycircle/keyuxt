<template>
  <div>
    <h1>{{ post.title }}</h1>
    <span>{{ post.state }}</span>
    <span>{{ post.publishedDate }}</span>
    <p>{{ post.content.full }}</p>
  </div>
</template>

<script>
import { postsRepository } from '../shared/repositories'

export default {
  name: 'id',
  async asyncData({ params, error }) {
    const { id } = params
    const post = await postsRepository
      .get({ id })
      .catch(e => error({ statusCode: 404, message: 'Post not found' }))

    return { post }
  },
  head() {
    return {
      title: `Post: ${this.post.title}`
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 30px;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button {
  margin-top: 30px;
}
</style>
