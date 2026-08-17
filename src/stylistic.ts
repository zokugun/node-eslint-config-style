import type { CommonsRuleOptions, Configurator, EditorConfigOptions, OptionRules } from '@zokugun/eslint-toolkit';
import type { RuleOptions as StylisticRuleOptions } from './typegens/stylistic.js';

import plugin from '@stylistic/eslint-plugin';
import { rules } from './rules/stylistic.js'

type Options = OptionRules<StylisticRuleOptions | CommonsRuleOptions>;

export function stylistic(options: Options = {}): Configurator {
	return (resolve) => {
		const ecRules: Partial<StylisticRuleOptions | CommonsRuleOptions> = {};
		const ecConfig = resolve<EditorConfigOptions>('editorconfig/*');

		if(ecConfig) {
			const {
				end_of_line,
				insert_final_newline,
				indent_size,
				indent_style,
				trim_trailing_whitespace,
			} = ecConfig;

			if(indent_style === 'space') {
				ecRules['style/indent'] = ['error', Number(indent_size)];
				ecRules['style/indent-binary-ops'] = ['error', Number(indent_size)];
				ecRules['style/jsx-indent-props'] = [
					'error',
					{
						indentMode: Number(indent_size),
						ignoreTernaryOperator: true,
					},
				];
			}
			else if(indent_style === 'tab') {
				ecRules['style/indent'] = ['error', 'tab'];
				ecRules['style/indent-binary-ops'] = ['error', 'tab'];
				ecRules['style/jsx-indent-props'] = [
					'error',
					{
						indentMode: 'tab',
						ignoreTernaryOperator: true,
					},
				];
			}

			if(insert_final_newline === 'true') {
				ecRules['style/eol-last'] = ['error', 'always'];
			}
			else if(insert_final_newline === 'false') {
				ecRules['style/eol-last'] = ['error', 'never'];
			}

			if(end_of_line === 'lf') {
				ecRules['style/linebreak-style'] = ['error', 'unix'];
			}
			else if(end_of_line === 'crlf') {
				ecRules['style/linebreak-style'] = ['error', 'windows'];
			}

			if(trim_trailing_whitespace === 'true') {
				ecRules['style/no-trailing-spaces'] = 'error';
			}
			else if(trim_trailing_whitespace === 'false') {
				ecRules['style/no-trailing-spaces'] = 'off';
			}
		}

		const embeddedFiles = resolve<string>('embedded.sources', []).map((value) => `${value}/**`);
		const embeddedIndent = resolve<number | 'tab'>('embedded.indent');

		return [
			{
				name: 'zokugun/stylistic/plugin',
				plugins: {
					style: plugin,
				},
			},
			{
				name: 'zokugun/stylistic/rules',
				rules: {
					...rules,
					...ecRules,
					...options.rules,
				},
			},
			{
				name: 'zokugun/stylistic/embedded',
				files: embeddedFiles,
				rules: {
					'style/indent': ['error', embeddedIndent],
					'style/indent-binary-ops': ['error', embeddedIndent],
					'style/jsx-indent-props': [
						'error',
						{
							indentMode: embeddedIndent,
							ignoreTernaryOperator: true,
						},
					],
				},
			},
		];
	}
}
