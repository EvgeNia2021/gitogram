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
          <!-- <li class="users-item" v-for="{ id, owner, name } in items" :key="id">
            <userList
              :src="owner.avatar_url"
              :username="name"
              @onPress="
                $router.push({ name: 'Stories', params: { initialSlide: id } })
              "
            /> -->
          <li class="users-list" v-for="item in trendings" :key="item.id">
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
import { mapState, mapActions } from 'vuex'

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
      trendings: (state) => state.trendings.data.trendings
    })
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
      fetchReadme: 'trendings/fetchReadme'
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
  async mounted () {
    try {
      await this.fetchTrendings()
      // const { data } = await api.trendings.getTrendings()
      // this.items = data.items
    } catch (error) {
      alert('Something went wrong')
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
