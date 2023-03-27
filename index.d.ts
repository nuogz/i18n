/**
 *
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace: string, dirResource: string, locales?: string[]): void;
export function T(key: import('i18next').TFuncKey, options: import('i18next').TOptions, locale: string): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace: string, locales?: string[], formats?: string[]): TranslatorWithGlobalLocale;
export type TranslatorWithLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, locale: string) => string;
export type TranslatorWithGlobalLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions) => string;
