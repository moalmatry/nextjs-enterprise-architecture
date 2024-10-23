// locale prams provider
export interface LocaleParamsProps {
  params: { locale: string };
}

// ** client translate provider don't use it
export interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: string[];
}
