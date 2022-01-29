<template>
  <div class="slide" :class="{ active }">
    <pre>{{data}}</pre>
    <div class="slide__wrapper">
      <div class="slide__header">
        <div class="slide__pbar">
          <progressBar :active="active" @onFinish="$emit('onProgressFinish')" />
        </div>
        <div class="slide__user">
          <user :name="data.username" :src="data.userAvatar" />
        </div>
      </div>
      <div class="slide__body">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="slide__info" v-else>
          <!-- <div class="slide__pic">
          <img src="https://picsum.photos/300/200" alt="" >
        </div> -->
          <div
            v-if="data.content?.length"
            class="slide__text"
            v-html="data.content"
          ></div>
          <placeholder v-else :paragraphs="2" />
        </div>
        <div class="slide__footer">
          <myButton>
            <template> </template>
          </myButton>
        </div>
        <template v-if="active">
          <button
            v-if="btnsShown.includes('prev')"
            class="arrow arrow__prev"
            @click="$emit('onPrevSlide')"
          >
            <span class="icon">
              <icon name="arrowLeft" />
            </span>
          </button>
          <button
            v-if="btnsShown.includes('next')"
            class="arrow arrow__next"
            @click="$emit('onNextSlide')"
          >
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
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'

export default {
  components: {
    user,
    myButton,
    icon,
    progressBar,
    spinner,
    placeholder
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
<style src="./slider-item.scss" lang="scss" scoped></style>
