<template>
  <div :class={active} class="progress">
    <div class="progress__indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = true
    })
  }
}
</script>

<style src="./progress-bar.scss" lang="scss" scoped></style>
