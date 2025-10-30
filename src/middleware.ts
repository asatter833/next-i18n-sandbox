import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18n.config";
import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return i18nRouter(request, i18nConfig);
// }

// // applies this middleware only to files in the app directory
// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };

export function middleware(request: NextRequest) {
  const response = i18nRouter(request, i18nConfig);

  const pathname = request.nextUrl.pathname;
  const hasLocalePrefix = i18nConfig.locales.some((l) =>
    pathname.startsWith(`/${l}`)
  );

  // 👇 if no locale in path, reset cookie so defaultLocale is used
  if (!hasLocalePrefix) {
    response.cookies.set("_i18n_locale", i18nConfig.defaultLocale);
  }

  return response;
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
