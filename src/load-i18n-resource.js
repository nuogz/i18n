import { globalTop, localesDefault } from './global.pure.js';



/**
 * @param {string} namespace
 * @param {Object<string, Object>} textsLocale
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace, textsLocale, locales = localesDefault) {
	/** @type {import('i18next').default} */
	const NI18N = globalTop.NI18N;


	return locales.map(locale => {
		try {
			const resource = textsLocale[locale];

			NI18N.addResourceBundle(locale, namespace, resource, true, true);

			return { locale, error: null };
		}
		catch(error) { return { locale, error }; }
	});
}
