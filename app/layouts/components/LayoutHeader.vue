<template>
  <div class="hero-head">
    <header>
      <div class="container">
        <div class="section">
          <div class="has-text-centered">
            <h1 class="title is-1 is-spaced">Keyuxt Blog</h1>
            <h4 class="subtitle is-4">a simple blog with bulma, nuxt and keystone</h4>
          </div>
        </div>
        <div class="section">
          <div class="tabs is-centered">
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {};
</script>
