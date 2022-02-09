<template>
  <div class="toggler">
    <toggler @toggle="toggle" />
  </div>
  <div class="comments" v-if="issues && issues.length && shown">
    <ul class="comments__list" >
      <li class="comments__item" v-for="issue in issues" :key="issue.id">
        <comment
          :username="issue.user?.login"
          :text="issue.body"
        />
      </li>
    </ul>
    <placeholder v-if="shown && loading" :paragraphs="3"></placeholder>
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
