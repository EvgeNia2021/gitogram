<template>
  <div class="header-bar">
    <headerBar>
      <template #header>
        <div class="logo"><icon name="logo" /></div>
        <div class="header-icons">
          <div class="home">
            <icon name="home" />
          </div>
          <div class="header-avatar">
             <avatar :size="size" />
          </div>
          <div class="logout">
            <icon name="logout" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="users-list">
          <li class="users-item" v-for="item in items" :key="item.id">
            <userList
            :feed="getFeedData(item)"
              @onPress="handlePress(user.id)"
            />
          </li>
        </ul>
      </template>
    </headerBar>
  </div>
  <div class="comment-section">
    <ul class="c-feed">
      <li class="c-feed-item" v-for="item in items" :key="item.id">
        <feed :feed="getFeedData(item)" />
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
// import users from './data.json'
import { feed } from '../../components/feed'
import { sliderItem } from '../../components/slider-item'
import * as api from '../../api'
import Avatar from '../../components/avatar/avatar.vue'

export default {
  name: 'feeds',
  components: {
    headerBar,
    icon,
    userList,
    feed,
    sliderItem,
    Avatar
  },
  props: {
    size: {
      type: String,
      default: 'xs'
    }
  },
  data () {
    return {
      // users,
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks_count,
        username: item.owner.login,
        avatar: item.owner.avatar_url
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      alert('Something went wrong')
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
