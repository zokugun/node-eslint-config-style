import type { RuleOptions } from '../typegens/import-x.js';

export const rules: Partial<RuleOptions> = {
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
