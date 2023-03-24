/**
 *
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace: string, dirResource: string, locales?: string[]): Promise<void>;
export function T(key: import('i18next').TFuncKey, options: import('i18next').TOptions, lng: string): any;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorLocale}
 */
export function TT(namespace: string, locales?: string[], formats?: string[]): TranslatorLocale;
export type Translator = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, lng: string) => any;
export type TranslatorLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions) => any;
