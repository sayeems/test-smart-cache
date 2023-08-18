"use client";

import Image from "next/image";
import serverError from "../../../public/server-error.png";
export default function ServerError() {
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      <h2 className="font-bold text-black text-xl text-center max-w-4xl">
        Oh no, it seems our servers have taken a coffee break. We&apos;re
        working on waking them up from their caffeine-induced slumber. Hang
        tight!
      </h2>
      <Image
        style={{ maxWidth: "50%", height: "auto" }}
        src={serverError}
        alt="not found"
        width={300}
        height={300}
        layout="responsive"
        placeholder="blur"
      ></Image>
    </div>
  );
}
