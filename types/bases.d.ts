export type TranslatorKey = string | TemplateStringsArray;

export type LocalizedTranslator = (
	key: TranslatorKey | TranslatorKey[],
	options: import('i18next').TOptions,
	locale: string,
	scope?: string
) => string;

export type NamespacelizedLocalizedTranslator = (
	key: TranslatorKey | TranslatorKey[],
	options: import('i18next').TOptions,
	scope?: string
) => string;

export type NamespacelizedLocalizedSequenceTranslator = {
	(scope: string, ...outputs: ([key: string, option: Object] | string)[]): string[];
	(scope: string, optionsBase: object, ...outputs: ([key: string, option: Object] | string)[]): string[];
}
