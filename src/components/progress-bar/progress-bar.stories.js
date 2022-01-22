import  progressBar  from './progress-bar.vue'

export default {
  title: 'Progress Bar',
  component: 
    progressBar,
    argTypes: {
      onFinish: {
        action: "onFinish",
        description: ""
      }
    }
  }


const ProgressBarTemplate = (args) => ({
    components: { xProgress: progressBar },
    data () {
      return { args }
    },
    template: `
    <xProgress @onFinish="args.onFinish" />`
    });
    
    export const Default = ProgressBarTemplate.bind({});
    