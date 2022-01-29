<template>
  <div :class="['spinner']">
    <icon name="spinnerIcon" />
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: { icon }
}
</script>

<style lang="scss" scoped src="./spinner.scss"></style>
