import { getLocalData } from '@/utils'

export default function detectLocale (allowedLocales, fallbackLocale) {
  let locale = getLocalData('locale') || navigator.language

  if (allowedLocales.includes(locale)) {
    return locale
  }

  let generalLocale = locale.split('-')[0]

  if (allowedLocales.includes(generalLocale)) {
    return generalLocale
  }

  return fallbackLocale
}
