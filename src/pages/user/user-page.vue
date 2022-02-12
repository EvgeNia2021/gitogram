<template>
<div class="header-bar">
  <headerBar>
 <template #header>
        <button class="logo" @click="$router.push({ name: 'Feeds' })"><icon name="logo" /></button>
        <nav class="header-icons">
          <button class="home" @click="$router.push({ name: 'Feeds' })">
            <icon name="home" />
          </button>
          <button
            class="header-avatar"
            @click="$router.push({ name: 'User' })"
          >
            <avatar v-if="user" :avatar="user.avatar_url" />
          </button>
          <button class="logout" @click="logout">
            <icon name="logout" />
          </button>
        </nav>
      </template>
  </headerBar>
  </div>
  <div class="g-container profile-screen">
    <div class="left-side">
      <h1 class="title">My profile</h1>
      <div class="user-component">
        <div class="user-pic">
          <img :src="user.avatar_url" />
        </div>
        <div class="user-info">
          <h2>{{ user.login }}</h2>
          <div class="info">
             <div class="user-stats">{{ user.public_repos }}</div>
             <router-link :to="{ name: 'myRepos' }" class="info__text">repositories</router-link>
             <div class="user-stats">{{ starred.length }}</div>
             <router-link :to="{ name: 'myFollowing' }" class="info__text">following</router-link>
            </div>
          <div class="username">{{ user.name }}</div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { headerBar } from '../../components/header-bar'
import { icon } from '../../icons'
import { avatar } from '../../components/avatar'

export default {
  name: 'User',
  components: {
    headerBar,
    icon,
    avatar

  },
  setup () {
    const { state, dispatch } = useStore()

    const user = computed(() => state.auth.user)
    const repos = computed(() => state.user.repos)
    const starred = computed(() => state.starred.starred)

    onMounted(() => {
      if (user.value === null) {
        dispatch('auth/getUser')
      }
      if (repos.value === null) {
        dispatch('user/fetchRepos')
      }
    })

    return {
      user,
      repos,
      starred
    }
  }
}
</script>
<style lang="scss" scoped src="./user-page.scss"></style>
