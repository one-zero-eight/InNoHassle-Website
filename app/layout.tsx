import Providers from "@/app/providers";
import ThemedHtml from "@/app/theme";
import Sidebar from "@/components/Sidebar";
import GoogleAnalytics from "@/lib/tracking/GoogleAnalytics";
import UserInfoTracker from "@/lib/tracking/UserInfoTracker";
import YandexMetrika from "@/lib/tracking/YandexMetrika";
import { Metadata } from "next";
import { Fuzzy_Bubbles, Rubik } from "next/font/google";
import React from "react";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

// Font for Scholarship
const fuzzyBubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fuzzy-bubbles",
  weight: "700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innohassle.ru"),
  title: { default: "InNoHassle", template: "%s — InNoHassle" },
  description: "InNoHassle ecosystem by one-zero-eight",
  applicationName: "InNoHassle",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ThemedHtml
      lang="en"
      className={`${rubik.variable} ${fuzzyBubbles.variable}`}
    >
      <body className="bg-base font-primary text-text-main text-lg">
        <Providers>
          <noscript className="flex justify-center w-full p-8 bg-red-700">
            You need to enable JavaScript to run this app.
          </noscript>
          <YandexMetrika />
          <GoogleAnalytics />
          <UserInfoTracker />

          <div className="flex flex-row">
            <Sidebar />
            <main className="w-full">{children}</main>
          </div>
          {modal}
        </Providers>
      </body>
    </ThemedHtml>
  );
}
