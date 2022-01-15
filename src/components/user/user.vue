<template>
  <div class="user">
    <avatar class="user__avatar" :avatar="src" :size="size" />
 <div>
  <div class="user__name">{{ name }}</div>
  <div class="user__type">{{ type }}</div>
   </div>
    </div>
</template>

<script>
// import { avatar as avatar } from '../avatar';
export default {
  components: {
    // Avatar
  },
  props: {
    src: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    name: {
      type: String,
      default: 'Jane Doe'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 's'
    }
  },
  setup (props) {
    return {}
  }
}
</script>
