/**
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace: string, dirResource: string, locales?: string[]): void;
export function T(key: string, options: import("i18next").TOptions<import("i18next").StringMap>, locale: string, scope?: string): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {import('./lib/declaration.js').TranslatorWithGlobalLocale}
 */
export function TT(namespace: string, locales?: string[], formats?: string[]): import('./lib/declaration.js').TranslatorWithGlobalLocale;
