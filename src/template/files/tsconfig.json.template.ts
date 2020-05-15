import formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const tsConfigJsonTemplate = trimAndAddFinalNewline(
  formatters.json({
    compilerOptions: {
      module: 'commonjs',
      target: 'ES2020',
      jsx: 'react',
      strict: true,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      noEmit: true,
      moduleResolution: 'node',
    },
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
  }),
);

export default tsConfigJsonTemplate;
