import { ExampleClient } from "@/Components/ExampleClient";
import React from "react";
import initTranslations from "../i18n";
import Link from "next/link";
import LanguageSelector from "@/Components/LanguageSelector";
import { Props, i18nNameSpaces } from "./page";

export default async function Home({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const userName = "Mohamed";

  return (
    // <TranslationsProvider
    //   resources={resources}
    //   locale={locale}
    //   namespaces={i18nNameSpaces}
    // >
    <main className="flex justify-center items-center flex-col m-auto">
      <h1>{t("header")}</h1>
      <ExampleClient text={t("subheader", { userName })} />
      <Link href="/about-us">{t("Common:about_us")}</Link>

      <LanguageSelector />
    </main>
    // </TranslationsProvider>
  );
}
