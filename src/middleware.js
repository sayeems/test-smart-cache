import { NextResponse } from "next/server";

export async function middleware(request) {
  const response = NextResponse.next();
  //   response.headers.set(
  //     "cache-control",
  //     "public,s-maxage=60470,must-revalidate"
  //   );
  // const headers = new Headers();
  // headers.forEach((a) => {
  //   console.log(a);
  // });
  // response.headers.set("x-test-cache", "pantheon");
  return response;
}

export const config = {
  matcher: ["/"],
};
