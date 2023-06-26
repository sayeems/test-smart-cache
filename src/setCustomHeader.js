import { NextResponse } from "next/server";

export async function setEdgeHeader(string = "") {
  const response = NextResponse.next();
  response.headers.set("x-custom-header", string);
  return response;
}
