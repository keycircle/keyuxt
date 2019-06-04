<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://user-images.githubusercontent.com/7957190/58878690-1f6df780-86d4-11e9-977b-5be56c3054bb.png">
        keyuxt
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarKeyuxt">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarKeyuxt" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-text" href="https://github.com/keycircle/keyuxt">
              <span class="icon">
                <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<style lang="scss">
  .navbar-brand {
    font-weight: 600;
    font-size: 1.3rem;
    & img {
      margin-right: 10px;
    }
  }
</style>

<script>
import { mapState } from "vuex";

export default {};
</script>
