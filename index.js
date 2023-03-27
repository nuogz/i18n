import { readFileSync } from 'fs';
import { resolve } from 'path';



/**
 * @callback TranslatorWithLocale
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 * @param {string} locale
 * @returns {string}
 */

/**
 * @callback TranslatorWithGlobalLocale
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 * @returns {string}
 */

/** @namespace globalThis */
/** @type {import('i18next').i18n} */
globalThis.NI18N;



// eslint-disable-next-line no-undef
const globalTop = (globalThis ?? global ?? window);
if(globalTop === undefined) { throw Error('Could not find global variable'); }


const envTop = globalTop?.process?.env;

const localesDefault = ((envTop?.NENV_I18N_LOCALE ?? '') + ';en')
	.replace(/(^|;)\s*en\s*(?=;\s*en\s*$)/, '').split(';').filter(s => s.trim()).map(s => s.trim().toLowerCase());
const formatsDefault = ((envTop?.NENV_I18N_FORMAT ?? '') + ';proto')
	.replace(/(^|;)\s*proto\s*(?=;\s*proto\s*$)/, '').split(';').filter(s => s.trim()).map(s => s.trim().toLowerCase());



if(!('NI18N' in globalTop)) {
	const NI18N = globalTop.NI18N = (await import('i18next')).default;


	NI18N.init({
		lng: localesDefault[0],
		fallbackLng: localesDefault,
		resources: {},
	});


	const escapeFromI18Next = NI18N.translator.interpolator.escape;
	const escapeFromHades = value => value?.toString?.()?.replace?.(/([~{}[\]])/g, '\\$1') ?? value;

	NI18N.services.formatter.add('term@hades', value => `~[${escapeFromHades(value)}]`);
	NI18N.services.formatter.add('value@hades', value => `~{${escapeFromHades(value)}}`);

	NI18N.services.formatter.add('valueType', value => `${escapeFromI18Next(value)} <${typeof value}>`);
	NI18N.services.formatter.add('valueTypeUnescape', value => `${value} <${typeof value}>`);
	NI18N.services.formatter.add('valueType@hades', value => `~{${escapeFromI18Next(escapeFromHades(value))} <${typeof value}>}`);
	NI18N.services.formatter.add('valueTypeUnescape@hades', value => `~{${escapeFromHades(value)} <${typeof value}>}`);
}



/**
 *
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace, dirResource, locales = localesDefault) {
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



/** @type {TranslatorWithLocale} */
export function T(key, options = {}, locale) {
	return globalTop.NI18N.t(key, Object.assign({}, options, { lng: locale }));
}


/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace, locales, formats = formatsDefault) {
	return (key, options) => T(
		formats.map(format => `${namespace}:${key}@${format}`),
		options,
		locales,
	);
}
