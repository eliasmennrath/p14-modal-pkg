import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
    input: './src/index.jsx',
    output: [
        {
            file: './dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: './dist/index.esm.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'], 
            babelHelpers: 'bundled',
        }),
        postcss({
            extensions: ['.css'],
        }),
    ],
};
