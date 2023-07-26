import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export const metadata = {
  title: "Pantheon Smart Cache",
  description: "Experience Pantheon Smart Cache",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-10 px-12 prose container mx-auto">
          <h1 className="text-center text-4xl">
            <Link href="/" className="text-teal-600 no-underline">
              Pantheon Smart Cache
            </Link>
            <span>/</span>
            <Link href="/csr" className="text-red-600 no-underline">
              CSR
            </Link>
          </h1>
        </header>
        <div className="prose container mx-auto max-w-7xl px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
