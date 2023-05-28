# CHANGELOG

## v3.2.1 - 2023.05.28 23
* improve code struct


## v3.2.0 - 2023.05.26 19
* update code to properly support browser build
* bump up dependencies
	* update `typescript` to `v5.x`, and renew jsdoc
* use eslint flat config, and related config udpate
	* use `eslint.config.js` instead `eslintrc.cjs`


## v3.1.0 - 2023.04.03 16
* new `T` funciton optional argument `scope` for better ouput
	* will return `${scope} --> ${result}` if `scope` is set


## v3.0.1 - 2023.04.03 15
* bump up dependencies
* update npmrc


## v3.0.0 - 2023.03.27 14
* bump up version to `v3.x`


## v2.1.0 - 2023.03.27 11
* (break) use `@` instead of `_` as a format split in locales files
* (break) rename formatter `term@hades` from `hadesTerm`
* (break) rename formatter `value@hades` from `hadesValue`
* new formatter: `valueType` to create text like `value <typeof value>`
	* `-` must be put before the key!
		* `valueType` will return `<` and `>`, which are escaped characters
		* due to the current flow of `i18next`, we cannot handle `escape` option in formatter
	* the unescape variant is `valueTypeUnescape`
	* the Hades variants are `valueType@hades` and `valueTypeUnescape@hades`
* now any value passed to the `Hades` formatters will be treated as not containing any Hades format
	* so all `~[]{}` characters contained in the value will be escaped: add `\\` before the character
* update `t.ds`


## v2.0.2 - 2023.03.24 16
* tweak code
* update description


## v2.0.1 - 2023.03.24 14
* bump up dependencies


## v2.0.0 - 2023.03.07 10
* refactor: (break) use the new structure of locale files
* refactor: (break) use 'proto' as default format
* refactor: (break) load 'hades' formatter by default
* refactor: use global I18N instance instead of independent instance
* rename environment variable `NENV_I18N_FORMAT` from `OUTPUT_FORMAT`
* rename environment variable `NENV_I18N_LOCALE` from `OUTPUT_LOCALE`
* improve jsdoc and `d.ts`


## v1.3.2 - 2023.02.01 11
* improve jsdoc and `d.ts`
* bump up dependencies


## v1.3.1 - 2023.01.13 17
* fix `package.json`


## v1.3.0 - 2023.01.13 16
* add declaration files
* change `jsconfig.json`.`moduleResolution` to `NodeNext` from `Node`
* bump up dependencies


## v1.2.2 - 2023.01.05 10
* bump up dependencies regularly


## v1.2.1 - 2022.08.25 19
* use `copyJSON` from `@nuogz/utility`
* bump up dependencies
* improve `package.json`
* update `.eslintrc.cjs`


## v1.2.0 - 2022.08.11 17
* use independent `I18N` instance instead shared instance


## v1.1.0 - 2022.08.11 11
* export wrapped function `T` and `TT`


## v1.0.2 - 2022.08.09 08
* improve `README.md` and `CHANGELOG.md`
* bump up `i18next` to `21.9.0`
* use unified `.eslintrc.cjs` from `@nuogz/pangu`


## v1.0.1 - 2022.08.08 18
* fix typos
* fix inline document
* add `CHANGLOG.md`


## v1.0.0 - 2022.08.08 17
* initial version
