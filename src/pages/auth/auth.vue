<template>
  <div class="auth">
    <div class="g-container">
      <div class="auth__container">
        <div class="auth__field">
          <div class="auth__logo">
            <icon name="logo" />
          </div>
          <div class="auth__motto">
            More than just one repository. This is our digital world.
          </div>
          <button @click="getUser" class="auth__btn">
            <myButton>
              <span class="btn__txt">Authorize with github</span>
              <span class="btn__logo"><icon name="githubLogo" /></span>
            </myButton>
          </button>
          </div>
          <div class="auth__pic">
            <img src="../../miscellaneous/authPagePic.png" alt="">
          </div>
      </div>
    </div>
    <div class="auth__footer">
      <span class="footer__license">© Gitogram by Nia</span>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { myButton } from '../../components/button'
// import { mapActions } from 'vuex'

export default {
  components: {
    icon,
    myButton
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
