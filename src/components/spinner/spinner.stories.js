import { spinner } from './'

export default {
  title: 'Spinner',
  components: {
    spinner
  }
}

const defaultSpinner = () => {
  return {
    components: {
      spinner
    },
    template: `
      <spinner />
    `
  }
}

export { defaultSpinner }
