import followButton from './follow-button.vue'

export default {
  title: 'followButton',
  component: { followButton },
argTypes: {
  hoverText: {
    control: { type: 'text'}
  }
}
} 

const template = (args) => ({
  components: { fButton: followButton },
  data () {
    return { args }
  },
  template: `
  <fButton v-bind="args">Follow</fButton>
  `
})

export const Default = template.bind({});

Default.args = {
  hoverText: 'Unfollow'
}