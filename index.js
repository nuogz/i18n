import { readFileSync } from 'fs';
import { resolve } from 'path';

import I18N from 'i18next';



const copyJSON = object => JSON.parse(JSON.stringify(object));


/**
 * @param {string} dirLocale
 * @param {Array<string>} [segmentsDirLocale]
 * @returns {I18N}
 */
const initI18N = async (dirLocale, segmentsDirLocale) => {
	const useFormatHades = (process.env.OUTPUT_FORMAT ?? '').split(';').filter(s => s).map(s => s.trim().toLowerCase()).includes('hades');
	const language = process.env.OUTPUT_LOCALE ?? 'en';


	if(!segmentsDirLocale) { segmentsDirLocale = useFormatHades ? ['locale', 'hades'] : ['locale']; }


	await I18N.init({
		lng: language,
		fallbackLng: 'en',
		resources: {
			en: JSON.parse(readFileSync(resolve(dirLocale, ...segmentsDirLocale, 'en.json'))),
			zh: JSON.parse(readFileSync(resolve(dirLocale, ...segmentsDirLocale, 'zh.json')))
		},
	});


	if(useFormatHades) {
		I18N.services.formatter.add('hadesValue', value => `~{${value}}`);
		I18N.services.formatter.add('hadesTerm', value => `~[${value}]`);
	}


	return I18N;
};


export const T = (key, options = {}, lng) => I18N.t(key, Object.assign(copyJSON(options), { lng }));
export const TT = locale => (key, options) => T(key, options, locale);



export default initI18N;
