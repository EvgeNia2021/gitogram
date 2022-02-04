<template>
  <div class="wrapper">
    <header class="header">
      <div class="g-container">
        <div class="header__content">
          <button class="header__logo" @click="$router.push({ name: 'Feeds' })">
            <icon name="logo" />
          </button>
          <button class="close__btn" @click="$router.push({ name: 'Feeds' })">
            <icon name="closeBtn" />
          </button>
        </div>
      </div>
    </header>
    <div class="slider__content">
      <!-- {{$route.params.initialSlide}} -->
      <slider
        :initialSlide="Number($route.params.initialSlide)"
        @noSlidesLeft="$router.push({ name: 'Feeds' })"
      />
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

<style lang="scss" src="./stories.scss" scoped></style>
