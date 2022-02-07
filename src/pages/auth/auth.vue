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
          <button @click="getCode" class="auth__btn">
            <myButton>
              <span class="btn__txt">Authorize with github</span>
              <span class="btn__logo"><icon name="githubLogo" /></span>
            </myButton>
          </button>
        </div>
        <div class="auth__pic">
          <img src="../../miscellaneous/authPagePic.png" alt="" />
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
import { mapActions } from 'vuex'
import axios from 'axios'
import env from '../../../env'

export default {
  components: {
    icon,
    myButton
  },
  methods: {
    ...mapActions({
      getAuthCode: 'auth/getAuthCode',
      authByCode: 'auth/authByCode',
      getUser: 'auth/getUser'
    }),
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status public_repo read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const token = await this.authByCode(code)
        localStorage.setItem('token', token)
        axios.defaults.headers.Authorization = `token ${token}`
        this.$router.push({ name: 'Feeds' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
