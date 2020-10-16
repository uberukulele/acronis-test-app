export default function addResourceLoader (i18n) {
  i18n.loadedResources = []

  i18n.loadResource = async (localeModule, locale = i18n.locale) => {
    if (!i18n.loadedResources.includes(localeModule)) {
      // avoiding double load
      i18n.loadedResources.push(localeModule)

      let resource = await import(`@/i18n/resources/${locale}/${localeModule}.json`)

      i18n.setLocaleMessage(locale, {
        [localeModule]: resource.default,
        ...i18n.messages[locale]
      })
    }
  }
}
