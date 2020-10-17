import Vue from 'vue'
import { showError } from '@/notifications'


Vue.prototype.$showError = function (error) {
  console.log()
  if (error.code && this.$te(`common.errors.${error.code}`)) {
    showError(this.$t(`common.errors.${error.code}`))
  } else {
    console.log(error)
  }
}
