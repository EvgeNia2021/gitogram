<template>
<div class="controls">
    <div class="controls__frame">
      <div class="controls__icon">
        <icon name="star" />
      </div>
      <div class="controls__star">Star</div>
    </div>
    <div class="controls__frame">
      {{ stars }}
    </div>
  <div class="controls__frame">
      <div class="controls__icon">
        <icon name="fork" />
      </div>
      <div class="controls__fork">Fork</div>
    </div>
    <div class="controls__frame">
      {{ forks }}
    </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  }
}
</script>
<style lang="scss" src="./controls.scss" scoped>
</style>
