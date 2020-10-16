import Vue from 'vue'
import Router from 'vue-router'

/* screen specific routes*/
import TodoRoutes from '@/components/todo/routes'

Vue.use(Router)

export default new Router({
  routes: [
    ...TodoRoutes
  ]
})
