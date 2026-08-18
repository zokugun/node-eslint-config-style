import stylistic from '@stylistic/eslint-plugin';
import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import { importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';

await buildTypeGen({
	name: 'import-x',
	plugin: importX,
	overwrite: true,
});

await buildTypeGen({
	name: 'perfectionist',
	plugin: perfectionist,
	overwrite: true,
});

await buildTypeGen({
	name: 'style',
	plugin: stylistic,
	fileName: 'stylistic.d.ts',
	typeName: 'StylisticRuleOptions',
	overwrite: true,
});
