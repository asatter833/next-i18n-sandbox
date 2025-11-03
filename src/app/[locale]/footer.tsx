"use client";
import React from "react";
import i18nConfig from "../../../i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { join } from "path";

const locales = i18nConfig.locales;

const Footer = () => {
  const pathname = usePathname();
  const getPathnameWithLocale = (locale: string) => {
    const pathslashes = pathname.split("/");
    if (!!pathslashes[1] && locales.includes(pathslashes[1])) {
      pathslashes.shift();
      pathslashes.shift();
    }
    return join("/", locale, ...pathslashes);
  };
  return (
    <div className="text-center p-10">
      <ul className="inline-flex gap-2">
        {locales.map((locale) => (
          <li className="uppercase" key={locale}>
            <Link href={getPathnameWithLocale(locale)} className="uppercase">
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
