import Vue from 'vue'
import Router from 'vue-router'
import { addI18nHook } from './hooks/locale-loader'
/* screen specific routes*/
import TodoRoutes from '@/components/todo/routes'
import AboutRoutes from '@/components/about/routes'

Vue.use(Router)

const AppRouter = new Router({
  routes: [
    ...TodoRoutes,
    ...AboutRoutes
  ]
})

addI18nHook(AppRouter)

export default AppRouter
