export type TranslatorKey = string | TemplateStringsArray;

export type TranslatorWithLocale = (
	key: TranslatorKey | TranslatorKey[],
	options: import('i18next').TOptions,
	locale: string,
	scope?: string
) => string;

export type TranslatorWithGlobalLocale = (
	key: TranslatorKey | TranslatorKey[],
	options: import('i18next').TOptions,
	scope?: string
) => string;
