<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <dic class="columns">
            <div class="column is-half">
              <h1 class="title">
                Starter template for
                <a href>Nuxt.js</a> with
                <a href>KeystoneJS</a>.
              </h1>
              <h2
                class="subtitle"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h2>
              <a href class="button is-primary is-medium">Get Started</a>
            </div>
            <div class="column">
              <img
                class="terminal-img"
                src="https://user-images.githubusercontent.com/7957190/58884002-d15ef100-86df-11e9-8d96-a70b0d383cd4.png"
              >
            </div>
          </dic>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns is-multiline is-mobile is-centered">
          <div v-for="post in posts" :key="post._id" class="column is-6 is-centered">
            <div class="header-content">
              <nuxt-link :to="`/posts/${ post._id }`">
                <h3 class="title">{{ post.title }}</h3>
              </nuxt-link>
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

            <div class="single-content">{{ post.content.brief }}</div>
            <div class="has-text-centered">
              <nuxt-link :to="`/posts/${ post._id }`">Read More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.subtitle {
  opacity: 0.8;
  font-size: 1.2rem;
}
.terminal-img {
  position: relative;
  top: -5rem;
}
</style>

<script>
import axios from "axios";

const debug = data => {
  console.log("debug", data);
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
