<template>
  <div class="wrapper">
    <header class="header">
      <div class="g-container">
        <button class="logo">
          <icon name="logo" />
        </button>
        <button class="close-btn">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      {{$route.params.initialSlide}}
      <slider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import { slider } from '../../components/slider'
import { icon } from '../../icons'

export default {
  components: {
    slider,
    icon
  }
}
</script>
