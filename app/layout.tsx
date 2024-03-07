import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio - Brayham Carvalho",
  description: "Este é o portifólio de Brayham Carvalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#030014] over-flow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
