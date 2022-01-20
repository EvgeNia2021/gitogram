import  progressBar  from './progress-bar.vue'

export default {
  title: 'Progress Bar',
  component: {
    progressBar
  }
} 

const ProgressBarTemplate = () => ({
    components: { progressBar },
    template: `
    <progressBar />`
    });
    
    export const Default = ProgressBarTemplate.bind({});
    