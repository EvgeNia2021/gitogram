<template>
  <div class="header-bar">
    <headerBar>
      <template #header>
        <div class="logo">   <icon name="logo" />
        </div>
        <div class="header-icons">
          <div class="home">
       <icon name="home" />
     </div>
  <div class="logout">
       <icon name="logout" />
     </div>
     </div>

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
  <div class="comment-section">
    <ul class="c-feed">
    <li class="c-feed-item" v-for="(item, ndx) in 5" :key="ndx">
  <feed />
  </li>
  </ul>
  </div>
  <div class="slider__temporary">
    <ul class="slider__list">
    <li class="slider__item" v-for="(item, ndx) in 5" :key="ndx">
 <sliderItem />
  </li>
  </ul>
  </div>

</template>

<script>
import { headerBar } from '../../components/header-bar'
import { userList } from '../../components/userList'
import { icon } from '../../icons'
import users from './data.json'
import { feed } from '../../components/feed'
import { sliderItem } from '../../components/slider-item'

export default {
  name: 'feeds',
  components: {
    headerBar,
    icon,
    userList,
    feed,
    sliderItem
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
