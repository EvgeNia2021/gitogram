<template>
  <button :class="['button', `${theme}`,`${size}`, {'hover-text': withHoverText}]"
:data-hover-text="hoverText">
    <!-- <span class="button-text"> -->
    <slot></slot>
<!-- </span> -->
  </button>
</template>

<script>
export default {
  name: 'followButton',
  props: {
    hoverText: {
      type: String

    },
    theme: {
      type: String,
      required: true
    },
    size: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style src="./button.scss" lang="scss" scoped></style>
