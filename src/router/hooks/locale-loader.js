import { uniq } from 'lodash'
import i18n from '@/i18n'

export function addI18nHook (router) {
  router.beforeEach(async (to, from, next) => {
    if (!i18n) {
      return next()
    }
    let localeParts = []
    to.matched.map(route => {
      if (route.meta.localePart) {
        let localePart = route.meta.localePart || []
        localeParts = localeParts.concat(localePart)
      }
    })

    if (localeParts.length) {
      let localeLoadTasks = uniq(localeParts).map(locale => i18n.loadResource(locale))
      await Promise.all(localeLoadTasks)
      next()
    } else {
      next()
    }
  })
}


