<template>
  <div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-mobile is-centered">
          <div v-for="post in posts" :key="post._id" class="column is-8 is-centered">
            <div class="header-content">
              <div class="has-text-centered">
                <h1 class="title">{{ post.title }}</h1>
              </div>
            </div>

            <div class="subheader-content has-text-centered">
              <p>
                {{ post.publishedDate}}
                <span>{{ post.categories }}</span>
              </p>
              <hr>
            </div>

            <div class="single-content">{{ post.content.brief }}</div>
            <div class="has-text-centered">
              <nuxt-link :to="`/posts/${ post._id }`">Read More</nuxt-link>
            </div>
          </div>
          <!--  end of post -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const debug = data => {
  console.log(data);
  return data;
};

export default {
  asyncData({ params }) {
    return axios
      .get(`${process.env.KEYSTONE_URL}/api/v1/posts`)
      .then(res => res.data)
      .then(debug)
      .catch(reason => {
        console.error(reason);
        return {};
      });
  }
};
</script>
