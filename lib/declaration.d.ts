export type TranslatorWithLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, locale: string, scope?: string) => string;
export type TranslatorWithGlobalLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, scope?: string) => string;
