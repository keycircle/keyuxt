<template>
  <div class="layouts__frame">
    <layout-header></layout-header>
    <nuxt/>
    <layout-footer></layout-footer>
  </div>
</template>


<script>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
