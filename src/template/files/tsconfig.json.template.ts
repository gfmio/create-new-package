import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const tsConfigJsonTemplate = trimAndAddFinalNewline(`
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "src",

    /* Source map options */

    "sourceMap": false,
    "inlineSourceMap": true,
    "inlineSources": false,
    // "mapRoot": "",
    // "sourceRoot": "",

    /* Declaration options */

    "declaration": false,
    "declarationMap": false,
    "emitDeclarationOnly": false,

    /* Included library files */

    "lib": ["esnext", "dom"],

    /* JSX */

    "jsx": "react",
    // "jsxFactory": "React.createElement",
    // "reactNamespace": "React",

    /* Module interop */

    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,

    /* Compile JS */

    "allowJs": true,
    "checkJs": true,
    "maxNodeModuleJsDepth": 0,
    "resolveJsonModule": true,

    /* tslib helpers */

    "noEmitHelpers": true,
    "importHelpers": true,

    /* Remove comments & @internal */

    "removeComments": true,
    "stripInternal": true,

    /* Compilation options */

    "listEmittedFiles": false,
    "listFiles": false,
    "noEmit": true,
    "noEmitOnError": true,
    "pretty": true,
    "noErrorTruncation": true,
    "preserveWatchOutput": false,

    /* Project compilation options */

    /* Enable incremental compilation */
    // "incremental": true,
    /* Enable project compilation */
    // "composite": true,
    /* Specify file to store incremental compilation information */
    // "tsBuildInfoFile": "./",
    // "assumeChangesOnlyAffectDirectDependencies": false,

    /* Strict Type-Checking Options */

    /* Enable all strict type-checking options. */
    "strict": true,
    /* Raise error on expressions and declarations with an implied 'any' type. */
    "noImplicitAny": true,
    /* Enable strict null checks. */
    "strictNullChecks": true,
    /* Enable strict checking of function types. */
    "strictFunctionTypes": true,
    /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    "strictBindCallApply": true,
    /* Enable strict checking of property initialization in classes. */
    "strictPropertyInitialization": true,
    /* Raise error on 'this' expressions with an implied 'any' type. */
    "noImplicitThis": true,
    /* Parse in strict mode and emit "use strict" for each source file. */
    "alwaysStrict": true,

    /* Additional Checks */

    /* Report errors on unused locals. */
    "noUnusedLocals": true,
    /* Report errors on unused parameters. */
    "noUnusedParameters": true,
    /* Report error when not all code paths in function return a value. */
    "noImplicitReturns": true,
    /* Report errors for fallthrough cases in switch statement. */
    "noFallthroughCasesInSwitch": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "noStrictGenericChecks": false,
    "skipLibCheck": true,
    "suppressExcessPropertyErrors": false,
    "suppressImplicitAnyIndexErrors": false,

    /* Module Resolution Options */

    /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "moduleResolution": "node",
    /* Base directory to resolve non-absolute module names. */
    // "baseUrl": "./",
    /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "paths": {},
    /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "rootDirs": [],
    /* List of folders to include type definitions from. */
    // "typeRoots": [],
    /* Type declaration files to be included in compilation. */
    // "types": [],
    /* Do not resolve the real path of symlinks. */
    "preserveSymlinks": true,
    /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    "isolatedModules": true,
    /* Allow accessing UMD globals from modules. */
    "allowUmdGlobalAccess": false,

    /* Experimental Options */

    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,

    /* Disallow inconsistently-cased references to the same file. */

    "forceConsistentCasingInFileNames": true,

    /* Other options */

    "downlevelIteration": true,
    "keyofStringsOnly": false,
    "importsNotUsedAsValues": "remove",
    "preserveConstEnums": true,
    "useDefineForClassFields": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.spec.tsx"]
}
`);

export default tsConfigJsonTemplate;
