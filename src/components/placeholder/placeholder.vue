<template>
  <div class="placeholder">
    <div class="placeholder__pic"></div>
    <div class="placeholder__content" v-for="n in paragraphs" :key="n">
      <div class="placeholder__item"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss"></style>
