import Vue from 'vue'
import VueI18n from 'vue-i18n'
import detectLocale from '@/i18n/detector/locale-detector'
import addResourceLoader from '@/i18n/plugins/resource-loader'

Vue.use(VueI18n)

const ALLOWED_LOCALES = ['ru', 'en']
const FALLBACK_LOCALE = 'en'
const LOCALE = detectLocale(ALLOWED_LOCALES, FALLBACK_LOCALE)

const i18n = new VueI18n({
  locale: LOCALE,
  fallbackLocale: 'en',
  silentTranslationWarn: true
})

addResourceLoader(i18n)

i18n.loadResource('common')

export default i18n

