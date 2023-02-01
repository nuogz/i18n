export default initI18N;
/**
 * @param {string} dirLocale
 * @param {Array<string>} [segmentsDirLocale]
 */
declare function initI18N(dirLocale: string, segmentsDirLocale?: Array<string>): Promise<{
    T: (key: import("i18next").TFunctionKeys, options: import("i18next").TOptions, lng: string) => import("i18next").TFunctionDetailedResult<object>;
    TT: (locale: string) => (key: import("i18next").TFunctionKeys, options: import("i18next").TOptions) => import("i18next").TFunctionDetailedResult<object>;
}>;
