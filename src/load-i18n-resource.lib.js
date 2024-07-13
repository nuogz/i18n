import { readFileSync } from 'fs';
import { resolve } from 'path';

import { globalTop, localesDefault } from './global.pure.js';



/**
 * @param {string} namespace
 * @param {string} dirResource
 * @param {string[]} [locales]
 */
export function loadI18NResource(namespace, dirResource, locales = localesDefault) {
	/** @type {import('i18next').default} */
	const NI18N = globalTop.NI18N;


	return locales.map(locale => {
		try {
			const resource = JSON.parse(readFileSync(resolve(dirResource, `${locale}.json`), 'utf-8'));

			NI18N.addResourceBundle(locale, namespace, resource, true, true);

			return { locale, error: null };
		}
		catch(error) { return { locale, error }; }
	});
}
