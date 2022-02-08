<template>
  <div class="toggler">
    <toggler @toggle="toggle" />
  </div>
  <div class="comments" v-if="shown">
     <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="comments__content" v-else>
    <ul class="comments__list" v-if="issues && issues.length && shown">
      <li class="comments__item" v-for="issue in issues" :key="issue.id">
        <comment
          :username="issue.user?.login"
          :text="issue.body"
        />
      </li>
    </ul>
        <placeholder v-else :paragraphs="2" />
    </div>
  </div>
</template>

<script>

import { toggler } from '../toggler'
import { comment } from '../comment'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'

export default {
  components: {
    toggler,
    comment,
    spinner,
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
