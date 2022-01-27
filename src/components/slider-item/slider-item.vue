<template>
  <div class="slide" :class="{ active }">
    <div class="slide__wrapper">
      <div class="slide__header">
        <div class="slide__pbar">
          <progressBar :active="active" />
        </div>
        <div class="slide__user">
          <user :username="data.username" :src="data.userAvatar" />
        </div>
      </div>
      <div class="slide__body">
        <div class="loader" v-if="loading">
        <!-- <spinner /> -->
        </div>
        <div class="slide__info" v-else>
        <div class="slide__pic">
          <img src="https://picsum.photos/300/200" alt="" >
        </div>
        <div v-if="data.content?.length" class="slide__text" v-html="data.content">
        </div>
        <!-- <placeholder v-else :paragraphs="2" /> -->
      </div>
      <div class="slide__footer">
        <myButton>
          <template>
          </template>
        </myButton>
      </div>
      <template v-if="active">
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
  </div>
</template>

<script>

import { user } from '../user'
import { myButton } from '../button'
import { icon } from '../../icons'
import { progressBar } from '../progress-bar'
// import { placeholder } from '../placeholder'
// import { spinner } from '../spinner'

export default {
  components: {
    user,
    myButton,
    icon,
    progressBar
    // placeholder,
    // spinner
  },
  emits: ['onFollow', 'onUnFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style src="./slider-item.scss" lang="scss" scoped></style>
