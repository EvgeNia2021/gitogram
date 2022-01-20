<template>
  <div class="slide">
    <div class="slide__wrapper">
      <div class="slide__header">
        <div class="slide__pbar">
          <progressBar />
        </div>
        <div class="slide__user">
          <user />
        </div>
      </div>
      <div class="slide__body">
        <div class="slide__pic">
          <img src="https://picsum.photos/300/200" alt="" >
        </div>
        <div class="slide__info">
          <div class="slide__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

        </div>
      </div>
      <div class="slide__footer">
        <follow-button>
          <template>
          </template>
        </follow-button>
      </div>
      <template>
        <button class="arrow arrow__prev">
          <span class="icon">
            <icon name="arrowLeft" />
          </span>
        </button>
        <button class="arrow arrow__next">
          <span class="icon">
            <icon name="arrowRight" />
          </span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>

import { user } from '../user'
import { followButton } from '../follow-button'
import { icon } from '../../icons'
import { progressBar } from '../progress-bar'

export default {
  components: {
    user,
    followButton,
    icon,
    progressBar
  }
}
</script>
<style src="./slider-item.scss" lang="scss" scoped></style>
