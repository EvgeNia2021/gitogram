import myButton from './button.vue'

export default {
  title: 'myButton',
  component: { myButton },
argTypes: {
  hoverText: {
    control: { type: 'text'}
  }
}
} 

const template = (args) => ({
  components: { myButton },
  data () {
    return { args }
  },
  template: `
  <myButton v-bind="args">Follow</myButton>
  `
})

export const Default = template.bind({});

Default.args = {
  hoverText: 'Unfollow'
}