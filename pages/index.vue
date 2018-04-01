<template>
  <div>
    <ul v-for="post in posts" v-bind:key="i">
      <li>
        <nuxt-link :to="`/${post._id}`">{{post.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>


<script>
import { postsRepository } from '../shared/repositories'

export default {
  async asyncData() {
    const posts = await postsRepository.list()
    return { posts }
  },
  head() {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title {
  margin: 30px 0;
}
.posts {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
</style>
