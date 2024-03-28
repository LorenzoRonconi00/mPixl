import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mpixl",
  description: "Your favorite web team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${poppins.className} bg-mpixl-950`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
