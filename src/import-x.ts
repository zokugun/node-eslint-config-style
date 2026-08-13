import type { Configurator, OptionFiles, OptionIgnores, OptionRules, OptionOverridesFiles, OptionOverridesIgnores } from '@zokugun/eslint-toolkit';
import type { RuleOptions } from './typegens/import-x.js';

import plugin from 'eslint-plugin-import-x';
import { rules } from './rules/import-x.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function importX(options: Options = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript.sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? options.ignores ?? [];

		return {
			name: 'zokugun/import-x/rules',
			files,
			ignores,
			plugins: {
				'import-x': plugin,
			},
			rules: {
				...rules,
				...options.rules,
			},
		};
	};
}
