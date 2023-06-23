import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantheon Smart Cache",
  description: "Experience Pantheon Smart Cache",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-10 px-20 prose container mx-auto">
          <h1 className="text-center text-4xl">Pantheon Smart Cache</h1>
        </header>
        <div className="prose container mx-auto max-w-7xl">{children}</div>
      </body>
    </html>
  );
}
