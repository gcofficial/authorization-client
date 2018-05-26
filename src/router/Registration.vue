<template>
  <div class="app flex-center flex-middle">
    <div class="form-content">
      <h1>Registration</h1>
      <div class="subtitle">Create a <b>Test task</b> account.
        Registration confirmation will be emailed to you.</div>
      <form v-on:submit.prevent="onSubmit">
        <label>Email <at-input v-model="login" type="email" size="large" placeholder="We will use it for authorization"></at-input></label>
        <label>Password <at-input v-model="password" type="password" size="large" placeholder="Top secret"></at-input></label>
        <label>Password repeat <at-input v-model="password_repeat" type="password" size="large" placeholder="Confirmation"></at-input></label>
        <div class="row">
          <div class="col-md-18">
            <at-checkbox v-model="i_agree" label="Shenzhen">I agree to terms of use and privacy policy</at-checkbox>
          </div>
          <div class="col-md-6 flex flex-end flex-middle">
            <at-button type="primary" nativeType="submit" :disabled="!valid">Registration</at-button>
          </div>
        </div>
        <app-or-separator></app-or-separator>
        <ul class="or-links">
            <li><router-link to="/">Login</router-link></li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Registration',
  data() {
    return {
      login: '',
      password: '',
      password_repeat: '',
      i_agree: true
    }
  },
  methods: {
    onSubmit(event) {
      if (!this.valid) return false;
      this.$http.post(
        'http://localhost:13666/user/registration',
        {
          email: this.login,
          password: this.password,
          password_repeat: this.password_repeat
        }
      )
      .then(
        res => {
          this.$Message.success('Thank you! Registration complete.');
          this.$router.push('/');
        }
      )
      .catch(err => this.$Message.error(err.body.message))
    }
  },
  computed: {
    valid(){
      return this.login != '' && this.name != '' && this.password.length != '' && this.i_agree != false;
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
</style>