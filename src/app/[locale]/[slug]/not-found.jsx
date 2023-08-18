import Image from "next/image";
import notFoundImage from "../../../../public/not-found.png";
export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      <h2 className="font-bold text-black text-xl text-center max-w-4xl">
        Oops! Looks like we took a wrong turn in the digital wilderness. The
        page you&apos;re looking for seems to be on an unexpected vacation.
        We&apos;ll send out a search party to bring it back!
      </h2>
      <Image
        style={{ maxWidth: "50%", height: "auto" }}
        src={notFoundImage}
        alt="not found"
        width={300}
        height={300}
        layout="responsive"
        placeholder="blur"
      ></Image>
    </div>
  );
}
