export const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en'
};

export type Locale = (typeof i18nConfig)['locales'][number];
// module.exports = i18Config;
