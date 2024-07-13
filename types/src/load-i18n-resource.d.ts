/**
 * @param {string} namespace
 * @param {Object<string, Object>} textsLocale
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace: string, textsLocale: {
    [x: string]: Object;
}, locales?: string[] | undefined): {
    locale: string;
    error: unknown;
}[];
