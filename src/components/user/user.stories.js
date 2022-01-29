import user from './user.vue'

export default {
  title: 'User',
  component: {
    user
  }
}

const userTemplate = () => ({
  components: { user },
  template: `
      <user />`
})

export const Default = userTemplate.bind({})
