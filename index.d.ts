export function T(key: import('i18next').TFuncKey, options: import('i18next').TOptions, locale: string, scope?: string): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace: string, locales?: string[], formats?: string[]): TranslatorWithGlobalLocale;
export { loadI18NResource };
export type TranslatorWithLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, locale: string, scope?: string) => string;
export type TranslatorWithGlobalLocale = (key: import('i18next').TFuncKey, options: import('i18next').TOptions, scope?: string) => string;
import { loadI18NResource } from './src/load-i18n-resource.lib.js';
