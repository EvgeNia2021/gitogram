<template>
  <div class="stories-slider">
    <div class="stories-container" ref="slider">
      <ul class="stories" ref="item">
        <li
          class="stories-item"
          v-for="(trending, ndx) in getUnstarredOnly"
          :key="trending.id"
        >
          <slider-item
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            :beginProgress="readyForProgress"
            @onFollow="starRepo"
            @onUnFollow="unStarRepo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { sliderItem } from '../slider-item'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    sliderItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true,
      readyForProgress: true
    }
  },
  emits: ['noSlidesLeft'],
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data.trendings
    }),
    ...mapGetters(['getUnstarredOnly']),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth =
        parseInt(getComputedStyle(item).getPropertyValue('width')) / 10
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      this.readyForProgress = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        alert('Something went wrong')
      } finally {
        this.loading = false
        this.btnsShown = true
        this.readyForProgress = true
      }
    },
    async handleSlide (slideNdx) {
      if (slideNdx < this.trendings.length) {
        this.moveSlider(slideNdx)
        await this.loadReadme()
      } else {
        this.$emit('noSlidesLeft')
      }
    },
    async follow (repo) {
      await this.starRepo(repo.id)
    },
    async unFollow (repo) {
      await this.unStarRepo(repo.id)
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
    // if (this.trendings.length === 0) {
    // }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style lang="scss" scoped src="./slider.scss"></style>
