import sliderItem from './slider-item.vue'

export default {
  title: 'User',
  component: {
    sliderItem
  }
}

const sliderItemTemplate = () => ({
  components: { sliderItem },
  template: `
      <sliderItem />`
})

export const Default = sliderItemTemplate.bind({})
