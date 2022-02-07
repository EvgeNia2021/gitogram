<template>
  <button :class="['button', `${theme}`, {'hover-text': withHoverText}]"
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
