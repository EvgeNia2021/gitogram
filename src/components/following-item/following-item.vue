<template>
  <div class="following-item">
    <div class="following-item__info">
      <avatar
        :avatar="src"
        type="following"
        class="user-avatar"
      />
      <div class="following-item__repo">
        <div class="repo-title">{{ title }}</div>
        <div class="user-type">{{ type }}</div>
      </div>
    </div>
    <div class="following-item__btn">
      <myButton size="small" theme="green" @click="$emit('onUnFollow', id)" title="unfollow">
        <span>following</span>
        <span></span>
      </myButton>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
import { myButton } from '../button'

export default {
  components: {
    avatar,
    myButton
  },
  emits: ['onUnFollow'],
  props: {
    src: String,
    title: String,
    type: String,
    id: Number
  }
}
</script>

<style src="./following-item.scss" lang="scss" scoped></style>
