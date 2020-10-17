import 'reset-css'
import '@/plugins/bem-cn'
import '@/plugins/vuelidate'
import '@/plugins/element-ui'
import '@/theme/index.css'

import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/i18n'

Vue.config.productionTip = false

window.app = new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')
