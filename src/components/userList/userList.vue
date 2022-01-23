<template>
  <button class="user-list-item" @click="$emit('onPress')">
    <div class="avatar">
    <img :src="feed.avatar" class="img" alt="user avatar" />
    </div>
<div class="username">{{ feed.username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    // avatar: {
    //   type: String,
    //   required: true
    // },
    // username: {
    //   type: String,
    //   required: true
    // },
    feed: Object
  }
}
</script>
<style lang="scss" src="./userList.scss" scoped></style>
