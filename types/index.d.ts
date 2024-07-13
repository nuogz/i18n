export function T(key: import("./bases.d.ts").TranslatorKey | import("./bases.d.ts").TranslatorKey[], options: import(
/** @typedef {import('./bases.d.ts').TranslatorWithGlobalLocale} TranslatorWithGlobalLocale */
"i18next").TOptions, locale: string, scope?: string): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace: string, locales?: string[] | undefined, formats?: string[] | undefined): TranslatorWithGlobalLocale;
export { loadI18NResource };
export type TranslatorWithLocale = import("./bases.d.ts").TranslatorWithLocale;
export type TranslatorWithGlobalLocale = import("./bases.d.ts").TranslatorWithGlobalLocale;
import { loadI18NResource } from './src/load-i18n-resource.lib.js';
