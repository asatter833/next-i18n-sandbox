const envLocales = process.env.I18NEXUS_DEFAULT_LOCALE_LANGUAGE;

const i18nConfig = {
  locales: envLocales ? envLocales.split(",") : ["en", "bn", "tr"],
  defaultLocale: process.env.I18NEXUS_DEFAULT_LOCALE || "en",
};

export default i18nConfig;
