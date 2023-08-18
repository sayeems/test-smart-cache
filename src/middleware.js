// import { NextResponse } from "next/server";
// import { sampleData } from "./sample";

// export async function middleware(request) {
//   let response = NextResponse.next();

//   // let head = process.env.skey;
//   const head = sampleData.sample;

//   response.headers.set("x-test-header", head);
//   response.headers.set(
//     "cache-control",
//     "public, max-age=604800, must-revalidate"
//   );

//   return response;
// }

// export const config = {
//   matcher: ["/"],
// };
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "de", "it", "ja"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
