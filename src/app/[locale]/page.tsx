import Link from "next/link";
import initTranslations from "../i18n";

type PageProps = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8 justify-center items-center">
        {t("home_header")}
        <Link className="underline" href={"/about"}>
          {t("about_text")}
        </Link>
      </main>
    </div>
  );
}
