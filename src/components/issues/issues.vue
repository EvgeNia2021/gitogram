<template>
  <div class="toggler">
    <toggler @toggle="toggle" @click="$emit('fetchIssues')" />
  </div>
  <div class="comments" v-if="shown">
    <ul class="comments__list" >
      <li class="comments__item" v-for="issue in issues" :key="issue.id">
        <comment
          :issueUsername="issue.user?.login"
          :issueText="issue.body"
        />
      </li>
    </ul>
  </div>
     <placeholder v-if="shown && loading" :paragraphs="2" />
</template>

<script>

import { toggler } from '../toggler'
import { comment } from '../comment'
import { placeholder } from '../placeholder'

export default {
  components: {
    toggler,
    comment,
    placeholder
  },
  data () {
    return {
      shown: false
    }
  },
  props: {
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      required: true
    }
  },
  emits: ['fetchIssues'],
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadIssues')
      }
    }
  }
}
</script>

<style src="./issues.scss" lang="scss" scoped></style>
