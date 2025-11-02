import { ReactNode } from "react";
import initTranslations from "@/app/i18n/i18n";
import TranslationsProvider from "@/app/i18n/TranslationProvider";

interface AboutLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["about", "common"];

export default async function AboutLayout({
  children,
  params: { locale },
}: AboutLayoutProps) {
  // Initialize translations on the server (SSR-safe)
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
}
