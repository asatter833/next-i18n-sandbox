// i18n/client.ts
import i18next, { i18n, Resource } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "../../../i18n.config";

let initialized = false;

export async function initI18n(
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: Resource
) {
  if (initialized) {
    if (i18next.language !== locale) {
      await i18next.changeLanguage(locale);
    }
    return i18next;
  }

  i18next.use(initReactI18next);

  if (!resources) {
    i18next.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../../locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18next.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  initialized = true;

  return i18next;
}
