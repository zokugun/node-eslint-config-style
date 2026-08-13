import stylistic from '@stylistic/eslint-plugin';
import { buildTypeGen } from '@zokugun/eslint-typegen-plus';
import { importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';

await buildTypeGen('import-x', importX, null, { overwrite: true });
await buildTypeGen('perfectionist', perfectionist, null, { overwrite: true });
await buildTypeGen('style', stylistic, 'stylistic.d.ts', { overwrite: true });
