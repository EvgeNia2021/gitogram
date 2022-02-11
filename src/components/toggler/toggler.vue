<template>
<div class="toggler">
  <button :class="['button', {'active': isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "View" }} issues</span>
    <span class="toggler-icon">
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
  emits: ['onToggle', 'fetchIssues'],
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
