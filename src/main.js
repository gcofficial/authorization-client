import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'at-ui-style'
import AtUI from 'at-ui'
import router from './router'

import OrSeparator from './components/OrSeparator'

Vue.use(AtUI)
Vue.use(VueResource)
Vue.component('app-or-separator', OrSeparator);

new Vue({
  el: '#app',
  router,
  ...App
})