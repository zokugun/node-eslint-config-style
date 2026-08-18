import type { ImportXRuleOptions } from '../typegens/import-x.js';

export const importXRules: Partial<ImportXRuleOptions> = {
	'import-x/extensions': [
		'error',
		'always',
		{
			fix: true,
			ignorePackages: true,
		},
	],
	'import-x/no-duplicates': [
		'error',
	],
};
