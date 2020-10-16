import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
// store modules
import user from '@/store/modules/User'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    user
  }
})
