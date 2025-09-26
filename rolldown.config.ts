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
      file: './dist/autotoast.esm.js',
      name: 'autotoast',
      esModule: true
    },
    {
      format: 'cjs',
      file: './dist/autotoast.cjs.js',
      esModule: true,
      name: 'autotoast',
    },
    {
      format: 'umd',
      file: './dist/autotoast.umd.js',
      name: 'autotoast',
    },
    {
      format: 'iife',
      file: './dist/autotoast.iife.js',
      name: 'autotoast',
    },
    {
      format: 'iife',
      file: './dist/autotoast.min.js',
      plugins: [terser() as Plugin],
    },
  ],
  plugins: [
    banner(() => bannerContent) as Plugin,
  ]
})