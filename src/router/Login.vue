<template>
  <div class="app flex-center flex-middle">
    <div class="form-content">
      <h1>Login</h1>
      <div class="subtitle">Sign into your <b>Test Task</b> account</div>
      <form v-on:submit.prevent="onSubmit">
        <label>Email <at-input v-model="login" v-on:input="debounceInput" size="large" type="email" placeholder="Username"></at-input></label>
        <label>Password <at-input v-model="password" type="password" size="large" placeholder="Credentials"></at-input></label>
        <div v-if="captcha_image != 0" class="security-image-row">
          <label>Security image code <at-input v-model="image_verify" type="text" size="large" placeholder="Security image"></at-input></label>
          <div v-html="captcha_image" @click="getCaptcha"></div>
        </div>
        <div class="row flex flex-end flex-middle">
          <at-button type="primary" nativeType="submit" :disabled="!valid">Login</at-button>
        </div>
        <app-or-separator></app-or-separator>
        <ul class="or-links">
            <li><router-link to="/registration">Registration</router-link></li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash';

export default {
  name: 'Login',
  created() {
    window['b'] = this;
  },
  data() {
    return {
      login: '',
      password: '',
      captcha_image: 0,
      image_verify: ''
    }
  },
  methods: {
    getCaptcha() {
      this.$http.post(
          'http://localhost:13666/user/captcha',
          {
            email: this.login
          }
        )
        .then(
          captcha => {
            if (captcha.body != 0) { 
              this.captcha_image = captcha.body;
            };
          }
        )
    },
    debounceInput: _.debounce(
      function() {
        this.getCaptcha();
      }, 
      1000
    ),
    onSubmit(event) {
      if (!this.valid) return false;
      this.$http
        .post(
          'http://localhost:13666/user/login',
          {
            email: this.login,
            password: this.password,
            image_verify: this.image_verify
          }
        )
        .then(
          res => {
            this.$router.push('/congratulations');
          }
        )
        .catch(
          err => {
            this.$Message.error(err.body.message);
            this.getCaptcha();
          }
        )
    }
  },
  computed: {
    valid(){
      return this.login != '' && this.password.length != '';
    }
  }
}
</script>
<style scoped>
  .app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fafafa;
    display: flex;
  }
  h1{
    font-size: 44px;
    font-weight: 200;
  }

  .form-content{
    width: 450px;
    text-align: left;
    margin-top: -50px;
  }

  .form-content form{
    margin-top: 20px;
  }

  .form-content label{
    margin-bottom: 10px;
    display: block;
    line-height: 26px;
  }
  .or-links{
    text-align: center;
  }

  .or-links li{
    display: inline-block;
  }

  .security-image-row{
    display: flex;
  }

  .security-image-row label{
    flex-grow: 1;
  }

  .security-image-row > div{
    padding-top: 15px;
    cursor: pointer;
  }
</style>