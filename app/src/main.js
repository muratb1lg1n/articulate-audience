// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBicycle,faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faBicycle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;
Vue.use(require('vue-moment'));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
