module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				printWidth: 100,
				tabWidth: 2,
				useTabs: true,
				bracketSpacing: true,
				trailingComma: 'all',
			},
		],
		semi: ['error', 'always'],
		'no-unused-vars': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
