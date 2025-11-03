"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
export default function Employee() {
  const { t } = useTranslation();
  const username = "Abdus Satter";
  console.log(t("home_link"));
  return (
    <main className="flex flex-row items-center justify-center gap-10 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1>{t("about_header", { username })}</h1>
        <Link className="underline" href={"/"}>
          {t("home_link")}
        </Link>
      </div>
    </main>
  );
}
