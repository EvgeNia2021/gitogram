<template>
  <div class="repos__header">
    <h2 class="title">Repositories</h2>
    <div class="repos__count" v-if="repos">{{ repos.length }}</div>
  </div>
  <div class="repos__body">
    <ul class="repos__list">
      <li class="repos__item" v-for="item in repos" :key="item.id">
        <userRepos
          :stars="item.stargazers_count"
          :forks="item.forks"
          :title="item.name"
          :description="item.description"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import { userRepos } from '../../../components/user-repos'

export default {
  name: 'repos',
  components: {
    userRepos
  },

  setup () {
    const { state } = useStore()

    const repos = computed(() => state.user.repos)

    return {
      repos
    }
  }
}
</script>

<style src="./repos.scss" lang="scss" scoped></style>
