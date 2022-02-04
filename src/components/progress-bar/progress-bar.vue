<template>
  <div :class="{ active: beginProgress }" class="progress">
    <pre>{{ beginProgress }}</pre>
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    beginProgress: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.active = true
    // })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },

  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    )
  }
}
</script>

<style src="./progress-bar.scss" lang="scss" scoped></style>
