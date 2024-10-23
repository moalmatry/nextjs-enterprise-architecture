import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { AudioProvider } from "@/providers/AudioProvider";
import AuthProvider from "@/providers/AuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ToastProvider from "@/providers/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Rubik({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: {
    default: "",
    template: ""
  },
  description:
    "digital platform that helps people connect with people in their local community.",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    images: [
      {
        url: ""
      }
    ]
  }
};

export default async function RootLayout({
  params: { locale },
  children
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const translate = await getMessages();

  console.log(translate);
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider messages={translate}>
          <AudioProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              <ReactQueryProvider>
                <ToastProvider>
                  <AuthProvider>{children}</AuthProvider>
                </ToastProvider>
              </ReactQueryProvider>
            </ThemeProvider>
          </AudioProvider>
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
