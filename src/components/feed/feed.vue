<template>
  <div class="c-feed">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text="Something clever" username="Jane Doe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment
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
  }
}

</script>

<style src="./feed.scss" lang="scss" scoped></style>
