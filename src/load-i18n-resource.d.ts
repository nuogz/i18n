/**
 * @param {string} namespace
 * @param {Object<string, Object>} textsLocale
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace: string, textsLocale: {
    [x: string]: any;
}, locales?: string[]): void;
