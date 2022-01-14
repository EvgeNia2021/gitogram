<template>
  <div class="header-bar">
    <headerBar>
      <template #header>
        <icon name="home" />
        <h1>Header</h1>
      </template>
      <template #content>
        <ul class="users-list">
        <li class="users-item" v-for="user in users" :key="user.id">
          <userList
          :avatar="user.avatar"
          :username="user.username"
          @onPress="handlePress(user.id)"
           />
        </li>
        </ul>
      </template>
    </headerBar>
  </div>
</template>

<script>
import { headerBar } from '../../components/header-bar'
import { userList } from '../../components/userList'
import { icon } from '../../icons'
import users from './data.json'

export default {
  name: 'feeds',
  components: {
    headerBar,
    icon,
    userList
  },
  data () {
    return {
      users
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped>

</style>
