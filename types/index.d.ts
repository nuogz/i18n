export function T(key: import("./bases.d.ts").TranslatorKey | import("./bases.d.ts").TranslatorKey[], options: import(
/** @typedef {import('./bases.d.ts').LocalizedTranslator} LocalizedTranslator */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedTranslator} NamespacelizedLocalizedTranslator */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedSequenceTranslator} NamespacelizedLocalizedSequenceTranslator */
"i18next").TOptions, locale: string, scope?: string): string;
/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {{ T: NamespacelizedLocalizedTranslator, TS: NamespacelizedLocalizedSequenceTranslator }}
 */
export function TT(namespace: string, locales?: string[] | undefined, formats?: string[] | undefined): {
    T: NamespacelizedLocalizedTranslator;
    TS: NamespacelizedLocalizedSequenceTranslator;
};
export { loadI18NResource };
export type LocalizedTranslator = import("./bases.d.ts").LocalizedTranslator;
export type NamespacelizedLocalizedTranslator = import("./bases.d.ts").NamespacelizedLocalizedTranslator;
export type NamespacelizedLocalizedSequenceTranslator = import("./bases.d.ts").NamespacelizedLocalizedSequenceTranslator;
import { loadI18NResource } from './src/load-i18n-resource.lib.js';
