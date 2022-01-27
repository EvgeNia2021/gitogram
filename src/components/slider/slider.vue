<template>
  <div class="stories-slider">
    <div class="stories-container">
      <ul class="stories">
        <li class="stories-item" v-for="trending in trendings" :key="trending.id">
<slider-item
:data="getStoryData(trending)"
/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sliderItem } from '../slider-item'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    sliderItem
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    await this.fetchTrendings()
  }
}
</script>
