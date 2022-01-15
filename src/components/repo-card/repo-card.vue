<template>
  <div class="repo-content">
    <h2 class="repo-title">Title</h2>
    <div class="repo-info">
      <p v-if="description">Description</p>
    </div>
    <div class="repo-controls">
      <controls :star="10" :fork="5" />
    </div>
  </div>
</template>

<script>
import { controls } from '../controls'
export default {
  components: {
    controls
  },
  name: 'repoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    star: {
      type: Number,
      required: true
    },
    fork: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src="./repo-card.scss" lang="scss" scoped></style>
