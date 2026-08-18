import type { CommonsRuleOptions, EditorConfigOptions, Resolver } from '@zokugun/eslint-toolkit';
import type { StylisticRuleOptions } from '../typegens/stylistic.js';

export function stylistic(resolve: Resolver): Partial<StylisticRuleOptions | CommonsRuleOptions> {
	const rules: Partial<StylisticRuleOptions | CommonsRuleOptions> = {};
	const config = resolve<EditorConfigOptions>('editorconfig/*');

	if(config) {
		const {
			end_of_line,
			insert_final_newline,
			indent_size,
			indent_style,
			trim_trailing_whitespace,
		} = config;

		if(indent_style === 'space') {
			rules['style/indent'] = ['error', Number(indent_size)];
			rules['style/indent-binary-ops'] = ['error', Number(indent_size)];
			rules['style/jsx-indent-props'] = [
				'error',
				{
					indentMode: Number(indent_size),
					ignoreTernaryOperator: true,
				},
			];
		}
		else if(indent_style === 'tab') {
			rules['style/indent'] = ['error', 'tab'];
			rules['style/indent-binary-ops'] = ['error', 'tab'];
			rules['style/jsx-indent-props'] = [
				'error',
				{
					indentMode: 'tab',
					ignoreTernaryOperator: true,
				},
			];
		}

		if(insert_final_newline === 'true') {
			rules['style/eol-last'] = ['error', 'always'];
		}
		else if(insert_final_newline === 'false') {
			rules['style/eol-last'] = ['error', 'never'];
		}

		if(end_of_line === 'lf') {
			rules['style/linebreak-style'] = ['error', 'unix'];
		}
		else if(end_of_line === 'crlf') {
			rules['style/linebreak-style'] = ['error', 'windows'];
		}

		if(trim_trailing_whitespace === 'true') {
			rules['style/no-trailing-spaces'] = 'error';
		}
		else if(trim_trailing_whitespace === 'false') {
			rules['style/no-trailing-spaces'] = 'off';
		}
	}

	return rules
}
