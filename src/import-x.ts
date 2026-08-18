import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { ImportXRuleOptions } from './typegens/import-x.js';

import plugin from 'eslint-plugin-import-x';

import { importXRules } from './rules/import-x.js';

export function importX(options: DefaultOptions<ImportXRuleOptions> = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript/sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? options.ignores ?? [];

		const rules = options.overrides?.rules ?? {
			...importXRules,
			...options.rules,
		};

		return {
			name: 'zokugun/import-x/rules',
			files,
			ignores,
			plugins: {
				'import-x': plugin,
			},
			rules,
		};
	};
}
