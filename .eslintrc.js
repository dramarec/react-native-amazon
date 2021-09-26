module.exports = {
    root: true,
    extends: [
        '@react-native-community/eslint-config', // Default RN config
        'standard-with-typescript', // Installed in step 2
        'eslint-config-prettier' // Installed in step 3
    ],
    parser: '@typescript-eslint/parser', // Installed in step 2
    plugins: [
        '@typescript-eslint', // Installed in step 2
        'react', // Installed in step 1
        'react-native' // Installed in step 1
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'project': './tsconfig.json' // Required for Standard plugin
    },
    'env': {
        'react-native/react-native': true
    },
    'rules': {
        'prettier/prettier': 'off', // Turn off prettier
        // These are the rules that I use
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'off',
        'react-native/no-raw-text': ['off', {
            skip: ['CustomText']
        }],
        'react-native/no-single-element-style-arrays': 'warn',
        'object-curly-spacing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/require-array-sort-compare': ['error', {
            ignoreStringArrays: true
        }],
        'react/jsx-curly-spacing': ['off', {
            when: 'always',
            allowMultiline: true,
            children: true
        }],
        'eol-last': ['error', 'always'],
        'no-multiple-empty-lines': 'error',
        semi: ['error', 'never'],
        // Indent with 2 spaces
        indent: ['error', 4],
        // Indent JSX with 2 spaces
        'react/jsx-indent': ['error', 4],
        // Indent props with 2 spaces
        'react/jsx-indent-props': ['error', 4],
        '@typescript-eslint/restrict-plus-operands': 'off'
    }
}

// module.exports = {
//     env: {
//         es6: true,
//         node: true,
//         jest: true,
//     },
//     extends: [
//         'eslint:recommended',
//         'plugin:react/recommended',
//         'plugin:react-hooks/recommended',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     ],
//     parserOptions: {
//         project: './tsconfig.json',

//     },
//     plugins: ['react', 'react-hooks', '@typescript-eslint'],

//     rules: {
//         indent: ['error', 2, { SwitchCase: 1 }],
//         quotes: ['error', 'single', { avoidEscape: true }],

//         'no-empty-function': 'off',
//         '@typescript-eslint/no-empty-function': 'off',
//         'react/display-name': 'off',
//         'react/prop-types': 'off',
//     },
//     settings: {
//         react: {
//             version: 'detect',
//         },
//     },
// };

// module.exports = {
//     root: true,
//     extends: '@react-native-community',
//     // parser: 'babel-eslint',
// };

// module.exports = {
//     parser: 'babel-eslint',
//     env: {
//         browser: true,
//         es6: true,
//     },
//     extends: '@react-native-community',
//     globals: {
//         Atomics: 'readonly',
//         SharedArrayBuffer: 'readonly',
//     },
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 2018,
//         sourceType: 'module',
//     },
//     plugins: ['react'],
//     rules: {
//         'react-native/no-inline-styles': 1,
//         'prettier/prettier': [
//             'warn',
//             {
//                 'no-inline-styles': false,
//             },
//         ],
//     },
// };
