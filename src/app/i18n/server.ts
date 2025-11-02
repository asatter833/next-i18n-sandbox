// i18n/server.ts
import { createInstance, i18n, Resource } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "../../../i18n.config";

export async function initI18nServer(
  locale: string,
  namespaces: string[],
  resources?: Resource
): Promise<i18n> {
  const instance = createInstance();

  instance.use(initReactI18next);

  if (!resources) {
    instance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../../locales/${language}/${namespace}.json`)
      )
    );
  }

  await instance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : [locale],
    interpolation: {
      escapeValue: false,
    },
  });

  return instance;
}
