<template>
<div class="page-intro">
  <div class="wrapper wrapper--medium">
    <div class="hero-intro__summary">
      <div class="ty__body-display-large" v-html="content"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['content'],
};
</script>
