<template>
  <div class="feed-user">
    <user :src="src" :name="username" />
  </div>
  <repoCard>
    <template #repoCard>
      <h2 class="repo-title">{{ title }}</h2>
      <div class="repo-info">
        <p v-if="description">{{ description }}</p>
      </div>
      <div class="repo-controls">
        <controls :stars="stars" :forks="forks" />
      </div>
    </template>
  </repoCard>
  <div class="issues">
    <issues :issues="issues" @loadIssues="$emit('fetchIssues')" />
  </div>
  <!-- <toggler @onToggle="toggle" />
  <div class="comments" v-if="shown">
    <ul class="comments-list">
      <li class="comments-item" v-for="issue in issues" :key="issue.id">
        <comment  :username="issue.user?.login"
          :text="issue.body"
     />
      </li>
    </ul> -->
  <!-- </div> -->

  <div class="date">random date</div>
</template>

<script>
// import { comment } from '../comment'
// import { toggler } from '../toggler'
import { issues } from '../issues'
import { repoCard } from '../repo-card'
import { user } from '../user'
// import { data } from '../../pages/feeds'
import { controls } from '../controls'

export default {
  name: 'feed-item',
  components: {
    // toggler,
    // comment,
    user,
    issues,
    controls,
    repoCard
  },
  // data () {
  //   return {
  //     shown: false,
  //     posts: []
  //   }
  // },
  emits: ['fetchIssues'],
  // methods: {
  //   toggle (isOpened) {
  //     this.shown = isOpened
  //     if (isOpened && this.issues.length === 0) {
  //       this.$emit('loadIssues')
  //     }
  //   }
  // },
  props: {
    username: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    issues: {
      type: Array,
      required: true
    }
  }
  //   created () {
  //     this.posts = data
  //   }
  // }
}
</script>

<style src="./feed.scss" lang="scss" scoped></style>
