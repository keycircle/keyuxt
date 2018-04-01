<template>
  <div class="post">
    <div class="author">
      <img class="author__figure"></img>
      <div class="author__body">
        {{ post.author.name.first }} {{ post.author.name.last }}
      </div>
    </div>
    <h1 class="post__title">{{ post.title }}</h1>
    <span>{{ post.publishedDate }}</span>
    <p v-html="post.content.extended"></p>
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
.post {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}
.post__title {
  text-transform: uppercase;
}
</style>
