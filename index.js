import { formatsDefault, globalTop, localesDefault } from './src/global.pure.js';
import { loadI18NResource } from './src/load-i18n-resource.lib.js';



/** @typedef {import('./bases.d.ts').TranslatorWithLocale} TranslatorWithLocale */
/** @typedef {import('./bases.d.ts').TranslatorWithGlobalLocale} TranslatorWithGlobalLocale */


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
	/** @type {import('i18next').default} */
	const NI18N = globalTop.NI18N;

	const result = NI18N.t(key, Object.assign({}, options, { lng: locale }));

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
		[...formats.map(format => `${namespace}:${key}@${format}`), `${namespace}:${key}`],
		options,
		locales,
		scope,
	);
}
