import { formatsDefault, globalTop, localesDefault } from './src/global.pure.js';
import { loadI18NResource } from './src/load-i18n-resource.lib.js';



/**
 * @callback TranslatorWithLocale
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 * @param {string} locale
 * @param {string} [scope='']
 * @returns {string}
 */

/**
 * @callback TranslatorWithGlobalLocale
 * @param {import('i18next').TFuncKey} key
 * @param {import('i18next').TOptions} options
 * @param {string} [scope='']
 * @returns {string}
 */


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



export { loadI18NResource };



/** @type {TranslatorWithLocale} */
export function T(key, options = {}, locale, scope = '') {
	const result = globalTop.NI18N.t(key, Object.assign({}, options, { lng: locale }));

	return scope ? `${scope} --> ${result}` : result;
}


/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {TranslatorWithGlobalLocale}
 */
export function TT(namespace, locales, formats = formatsDefault) {
	return (key, options, scope = '') => T(
		formats.map(format => `${namespace}:${key}@${format}`),
		options,
		locales,
		scope,
	);
}
