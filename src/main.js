import 'reset-css'
import '@/plugins'
import '@/theme/index.css'
import '@/theme/scrollbars.css'

import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/i18n'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')
