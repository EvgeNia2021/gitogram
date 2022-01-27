<template>
  <div class="wrapper">
    <header class="header">
      <div class="g-container">
        <button class="logo">
          <logo white />
        </button>
        <button class="close-btn">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <slider />
    </div>
  </div>
</template>

<script>
import { slider } from '../../components/slider'
import { logo } from '../../icons'

export default {
  components: {
    slider,
    logo
  }
}
</script>
