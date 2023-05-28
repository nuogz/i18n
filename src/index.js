const globalTop = window;
if(globalTop === undefined) { throw Error('Could not find global variable'); }


const envTop = globalTop;

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
 * @param {string} namespace
 * @param {Object<string, Object>} textsLocale
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace, textsLocale, locales = localesDefault) {
	const NI18N = globalTop.NI18N;

	locales.map(locale => {
		try {
			const resource = textsLocale[locale];

			NI18N.addResourceBundle(locale, namespace, resource, true, true);
		}
		catch(error) { void 0; }
	});
}



/** @type {import('../lib/declaration.js').TranslatorWithLocale} */
export function T(key, options = {}, locale, scope = '') {
	const result = globalTop.NI18N.t(key, Object.assign({}, options, { lng: locale }));

	return scope ? `${scope} --> ${result}` : result;
}


/**
 * @param {string} namespace
 * @param {string[]} [locales]
 * @param {string[]} [formats]
 * @returns {import('../lib/declaration.js').TranslatorWithGlobalLocale}
 */
export function TT(namespace, locales, formats = formatsDefault) {
	return (key, options, scope = '') => T(
		formats.map(format => `${namespace}:${key}@${format}`),
		options,
		locales,
		scope,
	);
}
