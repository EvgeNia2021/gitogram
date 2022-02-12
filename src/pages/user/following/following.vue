<template>
  <div class="following__header">
    <h2 class="title">Following</h2>
    <div class="following__count" v-if="starred">{{ starred.length }}</div>
  </div>
  <ul class="following__list">
    <li class="following__item" v-for="item in starred" :key="item.id">
      <followingItem
        :src="item.owner?.avatar_url"
        :title="item.full_name"
        :type="item.owner.type"
        :id="item.id"
        @onUnFollow="unFollow(item)"
      />
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { followingItem } from '../../../components/following-item'

export default {
  name: 'following',
  components: { followingItem },

  setup () {
    const { state, dispatch, commit } = useStore()

    const starred = computed(() => state.starred.starred)

    onMounted(() => {
      dispatch('trendings/fetchTrendings')
    })

    const unFollow = async (repo) => {
      await dispatch('trendings/unStarRepo', repo.id)
      commit('starred/REMOVE_STAR', repo)
    }

    return {
      starred,
      unFollow
    }
  }
}
</script>

<style src="./following.scss" lang="scss" scoped></style>
