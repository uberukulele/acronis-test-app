import Vue from 'vue'
import Router from 'vue-router'
import { addI18nHook } from './hooks/locale-loader'
/* screen specific routes*/
import TodoRoutes from '@/components/todo/routes'

Vue.use(Router)

const AppRouter = new Router({
  routes: [
    ...TodoRoutes
  ]
})

addI18nHook(AppRouter)

export default AppRouter
