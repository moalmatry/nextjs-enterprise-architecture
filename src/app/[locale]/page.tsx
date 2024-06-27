import { ExampleClient } from '@/Components/ExampleClient';
import { LocaleParamsProps } from '@/Types';
import { useTranslate } from '@/hooks/useTranslate';
import Link from 'next/link';

const i18nNameSpaces = ['Home', 'Common'];

export default async function Home({ params: { locale } }: LocaleParamsProps) {
  const { t, resources: _ } = await useTranslate(locale, i18nNameSpaces);

  const userName = 'Mohamed';

  return (
    <main className="flex justify-center items-center flex-col m-auto">
      <h1>{t('header')}</h1>
      <ExampleClient text={t('subheader', { userName })} />
      <Link href="/about-us">{t('Common:about_us')}</Link>
    </main>
  );
}
