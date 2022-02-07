<template>
  <div class="header-bar">
    <headerBar>
      <template #header>
        <div class="logo"><icon name="logo" /></div>
        <nav class="header-icons">
          <button class="home" @click="$router.push({ name: 'Feeds' })">
            <icon name="home" />
          </button>
          <button
            class="header-avatar"
            @click="$router.push({ name: 'Repos' })"
          >
            <avatar v-if="user" :userAvatar="user.avatar_url" />
          </button>
          <button class="logout" @click="logout">
            <icon name="logout" />
          </button>
        </nav>
      </template>
      <template #content>
        <ul class="users-list">
          <!-- <li class="users-item" v-for="{ id, owner, name } in items" :key="id">
            <userList
              :src="owner.avatar_url"
              :username="name"
              @onPress="
                $router.push({ name: 'Stories', params: { initialSlide: id } })
              "
            /> -->
          <li
            class="users-list"
            v-for="item in getUnstarredOnly"
            :key="item.id"
          >
            <userList
              :src="item.owner?.avatar_url"
              :username="item.owner?.login"
              @onPress="
                $router.push({
                  name: 'Stories',
                  params: { initialSlide: item.id },
                })
              "
            />
          </li>
        </ul>
      </template>
    </headerBar>
  </div>
  <div class="comment-section">
    <ul class="c-feed">
      <li class="c-feed-item" v-for="item in trendings" :key="item.id">
        <feed
          :feed="getFeedData(item)"
          :username="item.owner?.login"
          :src="item.owner?.avatar_url"
          :title="item.name"
          :description="item.description"
          :stars="item.stargazers_count"
          :forks="item.forks_count"
          @fetchIssues="fetchIssues({
                id: item.id,
                owner: item.owner.login,
                repo: item.name })"
        />
      </li>
    </ul>
  </div>
  <!-- <div class="slider__temporary">
    <ul class="slider__list">
      <li class="slider__item" v-for="(item, ndx) in 5" :key="ndx">
        <sliderItem />
      </li>
    </ul>
  </div> -->
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { headerBar } from '../../components/header-bar'
import { userList } from '../../components/userList'
import { icon } from '../../icons'
// import users from './data.json'
import { feed } from '../../components/feed'
// import { sliderItem } from '../../components/slider-item'
// import * as api from '../../api'
import Avatar from '../../components/avatar/avatar.vue'

export default {
  name: 'feeds',
  components: {
    headerBar,
    icon,
    userList,
    feed,
    // sliderItem,
    Avatar
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data.trendings,
      starred: (state) => state.starred.data,
      user: (state) => state.auth.user
      // starred: (state) => state.starred.starred
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  // data () {
  //   return {
  //     // users,
  //     items: []
  //   }
  // },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      getUser: 'auth/getUser',
      logout: 'auth/logout',
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssues'
    }),
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
    if (this.user === null) {
      await this.getUser()
    }
  },
  async mounted () {
    try {
      await this.fetchTrendings()
      await this.fetchStarred()
      // const { data } = await api.trendings.getTrendings()
      // this.items = data.items
    } catch (error) {
      alert('Something went wrong')
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
