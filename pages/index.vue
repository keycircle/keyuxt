<template>
  <div>
    <ul v-for="post in posts" v-bind:key="i" class="posts">
      <li class="post">
        <nuxt-link :to="`/${post._id}`">
          <div class="card">
            <div class="card__head">
              <img src="http://via.placeholder.com/350x150"/>
            </div>
            <div class="card__body">
              <h3 class="card__title">{{post.title}}</h3>
              <p class="card__summary" v-html="post.content.brief">
              </p>
              <div class="author">
                <img class="author__figure"></img>
                <div class="author__body">
                  {{ post.author.name.first }} {{ post.author.name.last }}
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
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
      title: 'Posts'
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
  padding: 16px;
}

.post {
  width: 33%;
}

.user {
  margin: 10px 0;
}

.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
}

.card__head img {
  width: 100%;
}
.card__body {
  padding: 16px;
}

.author {
  display: flex;
  align-items: flex-start;
}

.author__figure {
  margin-right: 1em;
}

.author__body {
  flex: 1;
}
</style>
