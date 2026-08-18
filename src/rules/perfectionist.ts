import type { CommonsRuleOptions } from '@zokugun/eslint-toolkit';
import type { PerfectionistRuleOptions } from '../typegens/perfectionist.js';

export const perfectionistRules: Partial<PerfectionistRuleOptions | CommonsRuleOptions> = {
	'perfectionist/sort-array-includes': [
		'off',
	],
	'perfectionist/sort-arrays': [
		'off',
	],
	'perfectionist/sort-classes': [
		'off',
	],
	'perfectionist/sort-decorators': [
		'error',
	],
	'perfectionist/sort-enums': [
		'error',
	],
	'perfectionist/sort-export-attributes': [
		'error',
	],
	'perfectionist/sort-exports': [
		'error',
	],
	'perfectionist/sort-heritage-clauses': [
		'error',
	],
	'perfectionist/sort-import-attributes': [
		'error',
	],
	'sort-imports': [
		'off',
	],
	'perfectionist/sort-imports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
			groups: [
				'type-builtin',
				{ newlinesBetween: 0 },
				'type-external',
				{ newlinesBetween: 0 },
				'type-internal',
				{ newlinesBetween: 0 },
				['type-sibling', 'type-index'],
				{ newlinesBetween: 0 },
				'type-parent',
				'value-builtin',
				{ newlinesBetween: 0 },
				'value-external',
				'value-internal',
				{ newlinesBetween: 0 },
				['value-sibling', 'value-index'],
				{ newlinesBetween: 0 },
				'value-parent',
				'ts-equals-import',
				'unknown',
			]
		}
	],
	'perfectionist/sort-interfaces': [
		'error',
	],
	'perfectionist/sort-intersection-types': [
		'error',
	],
	'perfectionist/sort-jsx-props': [
		'error',
	],
	'perfectionist/sort-maps': [
		'error',
	],
	'perfectionist/sort-modules': [
		'error',
	],
	'perfectionist/sort-named-exports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
			partitionByNewLine: true,
		},
	],
	'perfectionist/sort-named-imports': [
		'error',
	],
	'perfectionist/sort-object-types': [
		'error',
	],
	'sort-keys': [
		'off',
	],
	// 'perfectionist/sort-objects': [
	// 	'off',
	// ],
	'perfectionist/sort-objects': [
		'error',
		{
			type: 'natural',
			order: 'asc',
			partitionByNewLine: true,
			groups: [
				'top',
				'unknown',
				{ group: 'paths', type: 'unsorted' },
				'bottom',
			],
			customGroups: [
				{
					groupName: 'top',
					selector: 'property',
					elementNamePattern: '^(?:id|name|title)$',
				},
				{
					groupName: 'bottom',
					selector: 'property',
					elementNamePattern: '^\_.*$',
				},
				{
					groupName: 'paths',
					selector: 'property',
					elementNamePattern: '^\/.*$',
					type: 'unsorted',
				}
			],
		},
	],
	'perfectionist/sort-sets': [
		'error',
	],
	'perfectionist/sort-switch-case': [
		'error',
	],
	'perfectionist/sort-union-types': [
		'error',
		{
			type: 'natural',
			order: 'asc',
			groups: [
				'unknown',
				'nullish',
			],
		},
	],
	'perfectionist/sort-variable-declarations': [
		'error',
	],
};
