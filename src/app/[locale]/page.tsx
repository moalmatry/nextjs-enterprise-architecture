'use client';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex justify-center items-center flex-col m-auto">
      <h1>This is boiler blade project</h1>
      <h1>{t('hello')}</h1>
    </main>
  );
}
