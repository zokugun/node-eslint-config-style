import type { Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { PerfectionistRuleOptions } from './typegens/perfectionist.js';

import plugin from 'eslint-plugin-perfectionist';

import { perfectionistRules } from './rules/perfectionist.js';

export function perfectionist(options: DefaultOptions<PerfectionistRuleOptions> = {}): Configurator {
	return (resolve) => {
		const sources = resolve<string[]>('javascript/sources') ?? [];

		const files = options.overrides?.files ?? [
			...sources,
			...(options.files ?? []),
		];

		const ignores = options.overrides?.ignores ?? [
			...resolve<string>('embedded/sources', []).map((value) => `${value}/**`),
			...(options.ignores ?? []),
		];

		const rules = options.overrides?.rules ?? {
			...perfectionistRules,
			...options.rules,
		};

		return {
			name: 'zokugun/perfectionist/rules',
			files,
			ignores,
			plugins: {
				perfectionist: plugin,
			},
			rules,
		};
	};
}
