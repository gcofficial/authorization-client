import Vue from 'vue'
import Router from 'vue-router'
import Registration from './Registration'
import Login from './Login'
import Activation from './Activation'
import Congratulations from './Congratulations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/activation/:k',
      name: 'Activation',
      component: Activation
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/congratulations',
      name: 'Congratulations',
      component: Congratulations
    },
  ]
})
