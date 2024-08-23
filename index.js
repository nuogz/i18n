import { formatsDefault, globalTop, localesDefault } from './src/global.pure.js';
import { loadI18NResource } from './src/load-i18n-resource.lib.js';


/** @typedef {import('./bases.d.ts').LocalizedTranslator} LocalizedTranslator */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedTranslator} NamespacelizedLocalizedTranslator */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedSequenceTranslator} NamespacelizedLocalizedSequenceTranslator */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedSequenceTranslatorA} NamespacelizedLocalizedSequenceTranslatorA */
/** @typedef {import('./bases.d.ts').NamespacelizedLocalizedSequenceTranslatorB} NamespacelizedLocalizedSequenceTranslatorB */



if(!('NI18N' in globalTop)) {
	const NI18N = globalTop.NI18N = (await import('i18next')).default;

	NI18N.init({
		lng: localesDefault[0],
		fallbackLng: localesDefault,
		resources: {},
	});
}



export { loadI18NResource };



/** @type {LocalizedTranslator} */
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
 * @returns {{ T: NamespacelizedLocalizedTranslator, TS: NamespacelizedLocalizedSequenceTranslator }}
 */
export function TT(namespace, locales, formats = formatsDefault) {
	return {
		T: (key, options, scope = '') => T(
			[
				...formats.map(format => `${namespace}:${key}@${format}`),
				`${namespace}:${key}`
			],
			options,
			locales,
			scope,
		),
		TS: (scope, ...outputs) => {
			const optionsBase = typeof outputs[0] == 'object' ? outputs.shift() : {};


			const paramsScope = (scope ?? '').split('.');
			const [scopeFinal, keyWhat] = paramsScope;
			if(scopeFinal) {
				if(keyWhat === undefined) { outputs.unshift('what'); }
				else if(keyWhat !== '') { outputs.unshift(keyWhat); }
			}


			return outputs.map(/** @param {string|[key: string, options: Object]} output */(output) => {
				const key = typeof output == 'string' ? output : output[0];
				const options = typeof output == 'string' ? {} : output[1];

				return T(
					[
						...formats.map(format => `${namespace}:${scopeFinal ? `${scopeFinal}:` : ''}${key}@${format}`),
						`${namespace}:${scopeFinal ? `${scopeFinal}:` : ''}${key}`,
						key
					],
					Object.assign({}, optionsBase, options),
					locales
				);
			});
		}
	};
}
