export function T(key: string | ReadonlyArray<string> | (string | ReadonlyArray<string>)[], options: import('i18next').TOptions, locale: string, scope?: string | undefined): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace: string, locales?: string[] | undefined, formats?: string[] | undefined): TranslatorWithGlobalLocale;
export { loadI18NResource };
export type TranslatorWithLocale = (key: string | ReadonlyArray<string> | (string | ReadonlyArray<string>)[], options: import('i18next').TOptions, locale: string, scope?: string | undefined) => string;
export type TranslatorWithGlobalLocale = (key: string | ReadonlyArray<string> | (string | ReadonlyArray<string>)[], options: import('i18next').TOptions, scope?: string | undefined) => string;
import { loadI18NResource } from './src/load-i18n-resource.lib.js';
