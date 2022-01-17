<template>
    <div class="feed-user">
    <user :src="avatarUrl" :name="username" />
  </div>
  <repoCard>
    <template #repoCard>
   <h2 class="repo-title">Title</h2>
    <div class="repo-info">
      <p>Description</p>
    </div>
    <div class="repo-controls">
      <controls :star="10" :fork="5" />
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
    repoCard,
    user,
    controls
  },
  data () {
    return {
      shown: false
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
    }
  },
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
  created () {
    this.posts = data
  }
}

</script>

<style src="./feed.scss" lang="scss" scoped></style>
