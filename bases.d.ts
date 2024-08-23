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


export type NamespacelizedLocalizedSequenceTranslatorA = (scope: string, ...outputs: ([key: string, option: Object] | string)[]) => string[];
export type NamespacelizedLocalizedSequenceTranslatorB = (scope: string, optionsBase: object, ...outputs: ([key: string, option: Object] | string)[]) => string[];

export type NamespacelizedLocalizedSequenceTranslator = {
	/**
	 * - if `scope` is not empty, the translation of `scope.what` will be unshifted into the return translations;
	 *   - default `what` can be specified by passing `scope.anotherKey`
	 * - if `scope` is empty or `scope.` is passed, the translation of `scope.what` will not be unshifted
	 */
	(...args: Parameters<NamespacelizedLocalizedSequenceTranslatorA>): ReturnType<NamespacelizedLocalizedSequenceTranslatorA>;
	/**
	 * - if `scope` is not empty, the translation of `scope.what` will be unshifted into the return translations;
	 *   - default `what` can be specified by passing `scope.anotherKey`
	 * - if `scope` is empty or `scope.` is passed, the translation of `scope.what` will not be unshifted
	 */
	(...args: Parameters<NamespacelizedLocalizedSequenceTranslatorB>): ReturnType<NamespacelizedLocalizedSequenceTranslatorB>;
}
