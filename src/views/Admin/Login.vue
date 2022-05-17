<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="main-login container">
      <h1 class="login-header">Login</h1>
      <form @submit.prevent="handleSubmit()" class="login-form">
        <Input
          class="login-form-input"
          type="email"
          label="Email"
          v-model="userLogin.email"
          :required="true"
        />
        <Input
          class="login-form-input"
          type="password"
          label="Password"
          v-model="userLogin.password"
          :required="true"
        />
        <Button class="login-submit-button" label="Login" :disabled="false" />
      </form>
      <div id="firebaseui-auth-container"></div>
    </div>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'
import { reactive } from '@vue/reactivity'
import { projectAuth, googleSignInAuth } from '../../firebase/config'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { Input, Button },
  setup () {
    const userLogin = reactive({
      email: '',
      password: ''
    })

    onMounted(() => {
      let ui = firebaseui.auth.AuthUI.getInstance()
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(projectAuth)
      }
      const uiConfig = {
        signInSuccessUrl: '/admin/sections',
        signInOptions: [googleSignInAuth]
      }
      ui.start("#firebaseui-auth-container", uiConfig)
    })


    const handleSubmit = () => {
      console.log('>>>LOGIN', userLogin)
    }

    return { userLogin, handleSubmit }
  }
}
</script>

<style lang="scss" scoped>
@include rayne($themes) {
  .main-login {
    width: 350px;
    height: 500px;
    border-radius: themed("border-radius");
    box-shadow: 5px 20px 50px themed("box-shadow");
    font-family: themed("serif-font");
    color: themed("main-font-color");
    .login-form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
}
</style>
