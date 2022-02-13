<template>
<div class="comments">
  <div class="toggler">
    <toggler @onToggle="toggle" />
  </div>
  <div class="comments__placeholder" v-if="shown && loading">
  <placeholder :paragraphs="2" />
  </div>
    <ul class="comments__list" v-if="issues && issues.length && shown">
      <li class="comments__item" v-for="issue in issues" :key="issue.id">
        <comment
          :issueUsername="issue.user?.login"
          :issueText="issue.title"
          :ifEmpty="issue.no_issue"
        />
      </li>
    </ul>
  </div>
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
      default: () => []
    }
  },
  emits: ['loadIssues'],
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
