import { defineConfig, Plugin } from 'rolldown';
import { terser } from 'rollup-plugin-terser'
import banner from 'rollup-plugin-banner2'
import packageJson from './package.json'


const bannerContent = `
/**
 * @name: ${packageJson.name}
 * @author: ${packageJson.author}
 * @version: ${packageJson.version}
 * @description: ${packageJson.description}
 * @license: ${packageJson.license}
 */`

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      file: './dist/autolog.esm.js',
      name: 'autoLog',
      esModule: true
    },
    {
      format: 'cjs',
      file: './dist/autolog.cjs.js',
      esModule: true,
      name: 'autoLog',
    },
    {
      format: 'umd',
      file: './dist/autolog.umd.js',
      name: 'autoLog',
    },
    {
      format: 'iife',
      file: './dist/autolog.iife.js',
      name: 'autoLog',
    },
    {
      format: 'iife',
      file: './dist/autolog.min.js',
      plugins: [terser() as Plugin],
    },
  ],
  plugins: [
    banner(() => bannerContent),
  ]
})