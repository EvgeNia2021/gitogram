<template>
  <button :class="['button', {'active': isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="toggler-icon">
      <icon name="toggleArrow" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  emits: ['toggle'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('toggle', this.isOpened)
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
