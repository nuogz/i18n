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

export const localesDefault = cleanEnv(((envTop?.NENV_I18N_LOCALE ?? '') + ';en')
	.replace(/(^|;)\s*en\s*(?=;\s*en\s*$)/, ''));
export const formatsDefault = cleanEnv(((envTop?.NENV_I18N_FORMAT ?? '') + ';proto')
	.replace(/(^|;)\s*proto\s*(?=;\s*proto\s*$)/, ''));
