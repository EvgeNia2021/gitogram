<template>
  <div :class="['spinner', { smallBtn }]">
    <icon name="spinnerIcon" />
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: { icon },
  props: {
    smallBtn: Boolean
  }
}
</script>

<style lang="scss" scoped src="./spinner.scss"></style>
