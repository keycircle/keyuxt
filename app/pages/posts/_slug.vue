<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-8 is-centered">
          <div class="has-text-centered">
            <h1 class="title">{{ post.title }}</h1>
          </div>

          <div class="subheader-content has-text-centered">
            <p>
              {{ post.publishedDate}}
              <span
                class="tag is-primary"
                v-for="cat in post.categories"
              >{{ cat }}</span>
            </p>
            <hr>
          </div>

          <div class="single-content" v-html="post.content.extended"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-body {
  min-height: 75vh;
}
</style>

<script>
import axios from "axios";

const debug = data => {
  console.log(data);
  return data;
};

export default {
  components: {},
  asyncData({ params }) {
    return axios
      .get(`${process.env.KEYSTONE_URL}/api/v1/posts/${params.slug}`)
      .then(res => res.data)
      .then(debug)
      .catch(reason => {
        console.error(reason);
        return {};
      });
  }
};
</script>
