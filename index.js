import { readFileSync } from 'fs';
import { resolve } from 'path';

import I18N from 'i18next';

import { copyJSON } from '@nuogz/utility';



/**
 * @param {string} dirLocale
 * @param {Array<string>} [segmentsDirLocale]
 */
const initI18N = async (dirLocale, segmentsDirLocale) => {
	const useFormatHades = (process.env.OUTPUT_FORMAT ?? '').split(';').filter(s => s).map(s => s.trim().toLowerCase()).includes('hades');
	const language = process.env.OUTPUT_LOCALE ?? 'en';


	if(!segmentsDirLocale) { segmentsDirLocale = useFormatHades ? ['locale', 'hades'] : ['locale']; }


	const i18n = I18N.createInstance();

	await i18n.init({
		lng: language,
		fallbackLng: 'en',
		resources: {
			en: JSON.parse(readFileSync(resolve(dirLocale, ...segmentsDirLocale, 'en.json'))),
			zh: JSON.parse(readFileSync(resolve(dirLocale, ...segmentsDirLocale, 'zh.json')))
		},
	});

	if(useFormatHades) {
		i18n.services.formatter.add('hadesValue', value => `~{${value}}`);
		i18n.services.formatter.add('hadesTerm', value => `~[${value}]`);
	}


	const T = (key, options = {}, lng) => i18n.t(key, Object.assign(copyJSON(options), { lng }));
	const TT = locale => (key, options) => T(key, options, locale);

	return { T, TT };
};


export default initI18N;
