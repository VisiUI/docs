import "./global.css";
import { RootProvider } from "next-docs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docs",
  description: "There you can find all the VisiUI's components with Preview, Code, Usage Methods and Usage",
  icons: "https://raw.githubusercontent.com/VisiUI/VisiUI/main/public/visiui8.png",
  openGraph: {
    title: "VisiUI Docs",
    description: "There you can find all the VisiUI's components with Preview, Code, Usage Methods and Usage",
    url: "https://docs-visi-ui.vercel.app/docs",
    siteName: "VisiUI Docs",
    images: [
      {
        url: "https://docs-visi-ui.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Welcome to the VisiUI Docs!",
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
