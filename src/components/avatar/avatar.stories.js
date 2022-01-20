import  avatar  from './avatar.vue'

export default {
  title: "Avatar",
  components: {
    avatar
  }
} 

const sAvatar = () => ({
    components: {avatar},
    template: `
      <avatar />
    `
  });

export const DefaultAvatar = sAvatar.bind({});
