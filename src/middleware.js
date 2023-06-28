import { NextResponse } from "next/server";
import { sampleData } from "./sample";

export async function middleware(request) {
  let response = NextResponse.next();

  // let head = process.env.skey;
  const head = sampleData.sample;

  response.headers.set("x-test-header", head);
  response.headers.set(
    "cache-control",
    "public, max-age=604800, must-revalidate"
  );

  return response;
}

export const config = {
  matcher: ["/"],
};
