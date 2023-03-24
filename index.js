import { readFileSync } from 'fs';
import { resolve } from 'path';



/**
 * @callback Translator
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 * @param {string} lng
 */

/**
 * @callback TranslatorLocale
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 */



// eslint-disable-next-line no-undef
const globalTop = (globalThis ?? global ?? window);


const localesDefault = (globalTop?.process?.env?.NENV_I18N_LOCALE + ';en')
	.replace(/(^|;)\s*en\s*(?=;\s*en\s*$)/, '').split(';').filter(s => s.trim()).map(s => s.trim().toLowerCase());
const formatsDefault = (globalTop?.process?.env?.NENV_I18N_FORMAT + ';proto')
	.replace(/(^|;)\s*proto\s*(?=;\s*proto\s*$)/, '').split(';').filter(s => s.trim()).map(s => s.trim().toLowerCase());


if(!('NI18N' in globalTop)) {
	/** @type {import('i18next').i18n} */
	const NI18N = globalTop.NI18N = (await import('i18next')).default;

	NI18N.init({
		lng: localesDefault[0],
		fallbackLng: localesDefault,
		resources: {},
	});


	NI18N.services.formatter.add('hadesValue', value => `~{${value}}`);
	NI18N.services.formatter.add('hadesTerm', value => `~[${value}]`);
}


/**
 *
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export async function loadI18NResource(namespace, dirResource, locales = localesDefault) {
	/** @type {import('i18next').i18n} */
	const NI18N = globalTop.NI18N;


	locales.map(locale => {
		try {
			const resource = JSON.parse(readFileSync(resolve(dirResource, `${locale}.json`), 'utf-8'));
			NI18N.addResourceBundle(locale, namespace, resource, true, true);
		}
		catch(error) {
			void 0;
		}
	});
}


/** @type {Translator} */
export function T(key, options = {}, lngs) {
	return globalTop.NI18N.t(key, Object.assign(JSON.parse(JSON.stringify(options)), { lngs }));
}

/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorLocale}
 */
export function TT(namespace, locales, formats = formatsDefault) {
	return (key, options) => T(
		formats.map(format => `${namespace}:${key}_${format}`),
		options,
		locales,
	);
}
