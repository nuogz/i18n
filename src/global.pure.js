/** @type {typeof globalThis | Window} */
// eslint-disable-next-line no-undef
export const globalTop = globalThis ?? global ?? window;
if(globalTop === undefined) { throw Error('Could not find global variable'); }

/** @type {NodeJS.ProcessEnv | Window} */
export const envTop = globalTop?.process?.env ?? globalTop;
if(envTop === undefined) { throw Error('Could not find global enviroment'); }


/**
 * @param {string} envsRaw
 * @returns {string[]}
 */
const cleanEnv = envsRaw => envsRaw.split(';').filter(s => s.trim()).map(s => s.trim().toLowerCase());


const envsTop = {};
try {
	const entries = globalTop.URL
		? [...new globalTop.URL(`https://world.peace?${envTop?.NENV_I18N ?? ''}`).searchParams.entries()]
		: envTop?.NENV_I18N?.trim().split('&').map(part => part.trim().split('='));

	for(const [key, value] of entries) { envsTop[key.toLowerCase()] = value; }
}
catch { void 0; }


export const localesDefault = cleanEnv(((envsTop?.locale ?? '') + ';en')
	.replace(/(^|;)\s*en\s*(?=;\s*en\s*$)/, ''));

export const formatsDefault = cleanEnv(((envsTop?.format ?? '') + ';proto')
	.replace(/(^|;)\s*proto\s*(?=;\s*proto\s*$)/, ''));
