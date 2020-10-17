import Vue from 'vue'
import { MessageBox } from 'element-ui'

// fix bug https://github.com/ElementUI/babel-plugin-component/issues/31
const _MessageBox = MessageBox
const { alert, confirm, prompt } = _MessageBox
Vue.prototype.$msgbox = _MessageBox
Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$prompt = prompt
