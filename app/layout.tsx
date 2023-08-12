import { Providers } from "@/store/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import React from "react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Moolah Admin",
  description: "Tracking all activities of the Moolah App",
  metadataBase: new URL("https://moolah-app.vercel.app/"),
  openGraph: {
    title: "Moolah Admin",
    description: "Tracking all activities of the Moolah App",
    type: "website",
    locale: "en_US",
    url: "https://moolah-app.vercel.app/",
    siteName: "Moolah Admin",
    images: [
      {
        url: "https://res.cloudinary.com/dfmtuwgcf/image/upload/v1691479961/Property_1_Moolah_1_u9kzq7.png",
        width: 800,
        height: 600,
        alt: "Moolah Admin",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${outfit.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
