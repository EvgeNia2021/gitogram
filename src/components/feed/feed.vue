<template>
    <div class="feed-user">
    <user :src="feed.avatar" :name="feed.username" />
  </div>
  <repoCard>
    <template #repoCard>
   <h2 class="repo-title"> {{ feed.title }}</h2>
    <div class="repo-info">
      <p v-if="feed.description"> {{ feed.description }}</p>
    </div>
    <div class="repo-controls">
      <controls :star="feed.stars" :fork="feed.forks" />
    </div>
    </template>
     </repoCard>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text="Something clever" username="Jane Doe" />
        </li>
      </ul>
    </div>

  <div class="date">
    random date
  </div>

</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { repoCard } from '../repo-card'
import { user } from '../user'
import { data } from '../../pages/feeds'
import { controls } from '../controls'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    user,
    controls,
    repoCard
  },
  data () {
    return {
      shown: false,
      posts: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: 'Jane Doe'
    },
    feed: Object
    // title: String,
    // stars: Number,
    // forks: Number,
    // description: String,
    // owner: String
  },
  created () {
    this.posts = data
  }
}

</script>

<style src="./feed.scss" lang="scss" scoped></style>
