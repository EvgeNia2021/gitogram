<template>
<div class="toggler">
  <button :class="['toggler__button', {'active': isOpened }]" @click="toggle">
    <span class="toggler__text">{{ isOpened ? "Hide" : "View" }} issues</span>
    <span class="toggler__icon">
      <icon name="toggleArrow" />
    </span>
  </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  emits: ['onToggle'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
