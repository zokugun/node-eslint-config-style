import type { Configurator, OptionFiles, OptionIgnores, OptionRules, OptionOverridesFiles, OptionOverridesIgnores } from '@zokugun/eslint-toolkit';
import type { RuleOptions } from './typegens/perfectionist.js';

import plugin from 'eslint-plugin-perfectionist';
import { rules } from './rules/perfectionist.js';

type Options = OptionRules<RuleOptions> & OptionFiles & OptionIgnores & OptionOverridesFiles & OptionOverridesIgnores;

export function perfectionist(options: Options = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript.sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? options.ignores ?? [];

		return {
			name: 'zokugun/perfectionist/rules',
			files,
			ignores,
			plugins: {
				perfectionist: plugin,
			},
			rules: {
				...rules,
				...options.rules,
			},
		};
	};
}
