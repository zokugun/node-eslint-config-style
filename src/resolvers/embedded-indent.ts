import type { CommonsRuleOptions, Resolver } from '@zokugun/eslint-toolkit';
import type { StylisticRuleOptions } from '../typegens/stylistic.js';

export function stylistic(resolve: Resolver): Partial<StylisticRuleOptions | CommonsRuleOptions> {
	const indent = resolve<number | 'tab'>('embedded/indent');

	return {
		'style/indent': ['error', indent],
		'style/indent-binary-ops': ['error', indent],
		'style/jsx-indent-props': [
			'error',
			{
				indentMode: indent,
				ignoreTernaryOperator: true,
			},
		],
	};
}
