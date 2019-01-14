<template>
 <div class="hero-foot footer-custom">
    <div class="container has-text-centered">
      <hr/>
      <a class="nav-item" href="https://github.com/keycircle/keyuxt">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <p>by <a href="https://github.com/keycircle/keyuxt">@keycircle/keyuxt</a></p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['footer']),
  }
}
</script>

