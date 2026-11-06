import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'Treinamento-Bolsistas/venv',
  ]),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-deprecated': 'error',
    },
  },

  {
    files: [
      'src/components/DomeGallery.tsx',
      'src/components/FormPublicar.tsx',
      'src/components/SideBarComentarios.tsx',
      'src/features/autocadastro/forms/FormCadastro.tsx',
      'src/features/autocadastro/forms/FormLogin.tsx',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  {
    files: ['src/components/DomeGallery.tsx'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },

  {
    files: ['src/features/autocadastro/forms/FormCadastro.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  {
    files: ['src/pages/Footer/index.tsx'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },
])