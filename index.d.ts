export default initI18N;
/**
 * @param {string} dirLocale
 * @param {Array<string>} [segmentsDirLocale]
 */
declare function initI18N(dirLocale: string, segmentsDirLocale?: Array<string>): Promise<{
    T: (key: any, options: {}, lng: any) => import("i18next").TFunctionDetailedResult<object>;
    TT: (locale: any) => (key: any, options: any) => import("i18next").TFunctionDetailedResult<object>;
}>;
