import type { CommonsRuleOptions } from '@zokugun/eslint-toolkit';
import type { StylisticRuleOptions } from '../typegens/stylistic.js';

export const stylisticRules: Partial<StylisticRuleOptions | CommonsRuleOptions> = {
	// @TODO add a maxLength (50)
	// 'style/array-bracket-newline': [
	// 	'error',
	// 	{
	// 		minItems: 5
	// 	},
	// ],
	'style/array-bracket-newline': [
		'off',
	],
	'style/array-bracket-spacing': [
		'error',
		'never',
	],
	// @TODO add a maxLength (50)
	// 'style/array-element-newline': [
	// 	'error',
	// 	{
	// 		minItems: 5
	// 	},
	// ],
	'style/array-element-newline': [
		'off',
	],
	'style/arrow-parens': [
		'error',
		'always'
	],
	'style/arrow-spacing': [
		'error',
		{
			before: true,
			after: true,
		},
	],
	'style/block-spacing': [
		'error',
		'always',
	],
	'style/brace-style': [
		'error',
		'stroustrup',
		{
			allowSingleLine: false,
		},
	],
	'style/comma-dangle': [
		'error',
		'always-multiline',
	],
	'style/comma-spacing': [
		'error',
		{
			before: false,
			after: true,
		},
	],
	'style/comma-style': [
		'error',
		'last',
	],
	'style/computed-property-spacing': [
		'error',
		'never',
	],
	'style/curly-newline': [
		'error',
		{
			multiline: true,
			minElements: 0,
			ArrowFunctionExpression: {
				minElements: 1,
			},
			FunctionDeclaration: {
				minElements: 1,
			},
		}
	],
	'style/dot-location': [
		'error',
		'property',
	],
	'style/eol-last': [
		'error',
		'always'
	],
	'style/function-call-argument-newline': [
		'error',
		'consistent',
	],
	'style/function-call-spacing': [
		'error',
		'never',
	],
	'style/function-paren-newline': [
		'error',
		'multiline',
	],
	'style/generator-star-spacing': [
		'error',
		{
			before: true,
			after: false,
			anonymous: 'before',
			shorthand: 'before',
			method: 'before',
		}
	],
	'style/implicit-arrow-linebreak': [
		'error',
		'beside',
	],
	'indent': [
		'off',
	],
	'style/indent': [
		'off',
	],
	'style/indent-binary-ops': [
		'error',
		'tab',
	],
	'style/jsx-child-element-spacing': [
		'error',
	],
	'style/jsx-closing-bracket-location': [
		'error',
		'line-aligned',
	],
	'style/jsx-closing-tag-location': [
		'error',
		'line-aligned',
	],
	'style/jsx-curly-brace-presence': [
		'error',
		{
			props: 'always',
			children: 'never',
		},
	],
	'style/jsx-curly-newline': [
		'error',
		{
			multiline: 'require',
			singleline: 'forbid',
		},
	],
	'style/jsx-curly-spacing': [
		'error',
		'never',
	],
	'style/jsx-equals-spacing': [
		'error',
		'never',
	],
	'style/jsx-first-prop-new-line': [
		'error',
		'multiprop',
	],
	'style/jsx-function-call-newline': [
		'error',
		'multiline',
	],
	'style/jsx-max-props-per-line': [
		'error',
		{
			when: 'multiline',
			maximum: 1,
		}
	],
	'style/jsx-newline': [
		'error',
		{
			prevent: true,
		}
	],
	'style/jsx-one-expression-per-line': [
		'error',
		{
			allow: 'non-jsx',
		}
	],
	'style/jsx-pascal-case': [
		'error',
	],
	'style/exp-jsx-props-style': [
		'error',
		{
			multiLine: {
				maxItemsPerLine: 1,
			},
			singleLine: {
				maxItems: 5,
			},
		},
	],
	'style/jsx-quotes': [
		'error',
		'prefer-single',
	],
	'style/jsx-self-closing-comp': [
		'error',
		{
			component: true,
			html: false,
		}
	],
	'style/jsx-shorthand-boolean': [
		'error',
	],
	'style/jsx-shorthand-fragment': [
		'error',
	],
	'style/jsx-tag-spacing': [
		'error',
		{
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		},
	],
	'style/jsx-wrap-multilines': [
		'error',
		{
			declaration: 'parens',
			assignment: 'parens',
			return: 'parens',
			arrow: 'parens',
			condition: 'ignore',
			logical: 'ignore',
			prop: 'ignore',
			propertyValue: 'ignore',
		},
	],
	// @TODO add support for tabs
	// 'style/key-spacing': [
	// 	'error',
	// 	{
	// 		beforeColon: false,
	// 		afterColon: true,
	// 		mode: 'strict',
	// 		align: 'value',
	// 	},
	// ],
	'style/key-spacing': [
		'off',
	],
	'style/keyword-spacing': [
		'error',
		{
			overrides: {
				if: {
					after: false,
				},
				for: {
					after: false,
				},
				switch: {
					after: false,
				},
				while: {
					after: false,
				}
			}
		}
	],
	'style/line-comment-position': [
		'off',
	],
	'style/lines-around-comment': [
		'off',
	],
	// @TODO lines between private and public fields
	// 'style/lines-between-class-members': [
	// 	'error',
	// 	{
	// 		enforce: [
	// 			{ blankLine: 'always', prev: '*', next: 'field' },
	// 			{ blankLine: 'always', prev: 'field', next: '*' },
	// 			{ blankLine: 'never', prev: 'field', next: 'field' },
	// 			{ blankLine: 'always', prev: 'method', next: 'method' }
	// 		],
	// 	},
	// ],
	'style/lines-between-class-members': [
		'off',
	],
	'style/exp-list-style': [
		'off',
	],
	'style/max-len': [
		'off',
	],
	'style/max-statements-per-line': [
		'error',
		{
			max: 1,
		},
	],
	'style/member-delimiter-style': [
		'error',
		{
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
			multilineDetection: 'brackets',
		},
	],
	'style/multiline-comment-style': [
		'off',
	],
	'style/multiline-ternary': [
		'error',
		'always-multiline',
	],
	'style/new-parens': [
		'error',
		'always',
	],
	'style/newline-per-chained-call': [
		'error',
		{
			ignoreChainWithDepth: 3,
		},
	],
	'style/no-confusing-arrow': [
		'error',
		{
			onlyOneSimpleParam: true,
		},
	],
	// @TODO
	// 'style/no-extra-parens': [
	// 	'error',
	// 	'all',
	// 	{
	// 		conditionalAssign: false,
	// 		enforceForSequenceExpressions: false,
	// 		ignoreJSX: 'all',
	// 		ignoredNodes: [
	// 			'MemberExpression[object.type=NewExpression]'
	// 		],
	// 		nestedBinaryExpressions: false,
	// 		returnAssign: false,
	// 		ternaryOperandBinaryExpressions: false,
	// 	}
	// ],
	'style/no-extra-parens': [
		'off',
	],
	'style/no-extra-semi': [
		'error',
	],
	'style/no-floating-decimal': [
		'error',
	],
	'style/no-mixed-operators': [
		'error',
	],
	'style/no-mixed-spaces-and-tabs': [
		'error',
	],
	'style/no-multi-spaces': [
		'error',
		{
			ignoreEOLComments: true,
		},
	],
	'style/no-multiple-empty-lines': [
		'error',
	],
	'style/no-tabs': [
		'off',
	],
	'style/no-whitespace-before-property': [
		'error',
	],
	'style/nonblock-statement-body-position': [
		'off',
	],
	// @TODO
	// 'style/object-curly-newline': [
	// 	'error',
	// 	{
	// 		ObjectExpression: {
	// 			multiline: true,
	// 			minProperties: 1,
	// 		},
	// 		ObjectPattern: {
	// 			multiline: true,
	// 		},
	// 		ImportDeclaration: 'never',
	// 		ExportDeclaration: {
	// 			multiline: true,
	// 			minProperties: 1,
	// 		},
	// 	},
	// ],
	'style/object-curly-newline': [
		'off',
	],
	'style/object-curly-spacing': [
		'error',
		'always',
	],
	// @TODO
	// 'style/object-property-newline': [
	// 	'error',
	// ],
	'style/object-property-newline': [
		'off',
	],
	'style/one-var-declaration-per-line': [
		'error',
		'always',
	],
	'style/operator-linebreak': [
		'error',
		'before',
		{
			overrides: {
				'+=': 'none',
			},
		},
	],
	'style/padded-blocks': [
		'error',
		'never',
	],
	// @TODO type
	// 'style/padding-line-between-statements': [
	// 	'error',
	// 	{ blankLine: 'always', prev: '*', next: '*' },
	// 	{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
	// 	{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
	// 	{ blankLine: 'always', prev: ['expression'], next: '*' },
	// 	{ blankLine: 'any', prev: ['expression'], next: ['expression'] },
	// 	{ blankLine: 'never', prev: ['import'], next: ['import'] },
	// ],
	'style/padding-line-between-statements': [
		'off',
	],
	'style/quote-props': [
		'error',
		'as-needed',
	],
	'style/quotes': [
		'error',
		'single',
		{ 'avoidEscape': true }
	],
	'style/rest-spread-spacing': [
		'error',
		'never'
	],
	'style/semi': [
		'error',
		'always',
	],
	'style/semi-spacing': [
		'error',
	],
	'style/semi-style': [
		'error',
		'last',
	],
	'style/space-before-blocks': [
		'error',
	],
	'style/space-before-function-paren': [
		'error',
		{
			anonymous: 'never',
			asyncArrow: 'always',
			catch: 'never',
			named: 'never',
		},
	],
	'style/space-in-parens': [
		'error',
		'never',
	],
	'style/space-infix-ops': [
		'error',
	],
	'style/space-unary-ops': [
		'error',
		{
			overrides: {
				delete: false,
			}
		}
	],
	'style/spaced-comment': [
		'error',
	],
	'style/switch-colon-spacing': [
		'error',
	],
	'style/template-curly-spacing': [
		'error',
		'never',
	],
	'style/template-tag-spacing': [
		'error',
	],
	'style/type-annotation-spacing': [
		'error',
	],
	'style/type-generic-spacing': [
		'error',
	],
	'style/type-named-tuple-spacing': [
		'error',
	],
	'style/wrap-iife': [
		'error',
		'inside',
	],
	'style/wrap-regex': [
		'off',
	],
	'style/yield-star-spacing': [
		'error',
	],
};
