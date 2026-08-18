import type { CommonsRuleOptions, Configurator, DefaultOptions } from '@zokugun/eslint-toolkit';
import type { Linter } from 'eslint';
import type { StylisticRuleOptions } from './typegens/stylistic.js';

import plugin from '@stylistic/eslint-plugin';

import * as editorConfig from './resolvers/editor-config.js';
import * as embeddedIndent from './resolvers/embedded-indent.js';
import { stylisticRules } from './rules/stylistic.js'

export function stylistic(options: DefaultOptions<StylisticRuleOptions | CommonsRuleOptions> = {}): Configurator {
	return (resolve) => {
		const rules = options.overrides?.rules ?? {
			...stylisticRules,
			...editorConfig.stylistic(resolve),
			...options.rules,
		};

		const configs: Linter.Config[] = [
			{
				name: 'zokugun/stylistic/plugin',
				plugins: {
					style: plugin,
				},
			},
			{
				name: 'zokugun/stylistic/rules',
				rules,
			},
		];

		const embeddedFiles = resolve<string>('embedded/sources', []).map((value) => `${value}/**`);

		if(embeddedFiles.length > 0) {
			const ignores = options.embedded?.overrides?.ignores ?? options.embedded?.ignores ?? [];
			const rules = options.embedded?.overrides?.rules ?? {
				...embeddedIndent.stylistic(resolve),
				...options.embedded?.rules,
			};

			configs.push({
				name: 'zokugun/stylistic/embedded',
				files: embeddedFiles,
				ignores,
				rules,
			});
		}

		return configs;
	}
}
