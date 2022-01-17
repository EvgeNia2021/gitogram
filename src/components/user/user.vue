<template>
  <div class="user">
      <Avatar class="user__avatar" :avatar="src" :size="size" />
 <div>
  <div class="user__name">{{ name }}</div>
  <div class="user__type">{{ type }}</div>
   </div>
    </div>
</template>

<script>
import { avatar as Avatar } from '../avatar'
import users from '../../pages/feeds/data.json'
export default {
  components: {
    Avatar
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
  },
  data () {
    return {
      users
    }
  }
}
</script>
<style src="./user.scss" lang="scss" scoped></style>
