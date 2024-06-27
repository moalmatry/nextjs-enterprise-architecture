import initTranslations from '@/app/i18n';

export const useTranslate = async (
  locale: string,
  i18nNameSpaces: string[],
) => {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  return { t, resources };
};
