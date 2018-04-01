<template>
  <nav class="nav">
    <nuxt-link to="/" class="nav__title">keyuxt</nuxt-link>
  </nav>
</template>


<style scoped>
.nav {
  height: 65px;
  vertical-align: middle;
  display: table;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.nav__title {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  text-decoration: none;
  font-weight: 900;
  font-size: 32px;
  font-family: serif;
}
</style>
