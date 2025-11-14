const i18nConfig = {
  locales: ["en", "bn", "pt-PT", "tr"],
  defaultLocale: process.env.I18NEXUS_DEFAULT_LOCALE || "en",
  // prefixDefault: true, // this will add the default local routing to the url eg: "/en/about" without it it would be "/about"
};

export default i18nConfig;
