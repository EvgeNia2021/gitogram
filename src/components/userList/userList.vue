<template>
  <button class="user-list-item" @click="$emit('onPress')">
    <div class="avatar">
    <img :src="src" class="img" alt="user avatar" />
    </div>
<div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  emits: ['onPress']
}
</script>
<style lang="scss" src="./userList.scss" scoped></style>
