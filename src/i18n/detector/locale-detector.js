export default function detectLocale (allowedLocales, fallbackLocale) {
  let locale = navigator.language

  if (allowedLocales.includes(locale)) {
    return locale
  }

  let generalLocale = locale.split('-')[0]

  if (allowedLocales.includes(generalLocale)) {
    return generalLocale
  }

  return fallbackLocale
}
