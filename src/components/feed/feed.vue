<template>
  <ul class="c-feed">
    <li class="c-feed-item" v-for="(item, ndx) in 5" :key="ndx">

    <div class="feed-user">
    <user :src="avatar_url" :name="username" />
  </div>
   <repoCard />
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text="Something clever" username="Jane Doe" />
        </li>
      </ul>
    </div>

  <div class="date">
    {{ formatDate }}
  </div>
</li>
  </ul>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { repoCard } from '@/components/repo-card'
import { user } from '../user'
import { data } from '../../pages/feeds'

// import { monthsList } from '../../miscellaneous/monthsList.js'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    repoCard,
    user
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
    avatar_url: {
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
