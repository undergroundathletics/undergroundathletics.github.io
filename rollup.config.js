import minifyHtmlLiterals from 'rollup-plugin-minify-html-literals';
import {babel} from '@rollup/plugin-babel';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import nodeResolve from '@rollup/plugin-node-resolve';
import html from '@web/rollup-plugin-html';
import {terser} from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    plugins: [
        copy({targets: [
            {
                src: 'img/*',
                dest: 'docs/img'
            }
        ]}),
        babel({babelHelpers: 'bundled'}),
        html({
            input: './index.html',
            minify: true,
            transformHtml: html => {
                return html.replace(
                    'app-shell.js',
                    `app-shell.js?v=${Date.now()}`
                );
            }
        }),
        dynamicImportVars(),
        nodeResolve(),
        minifyHtmlLiterals(),
        terser({
            ecma: 2021,
            module: true
        })
    ],
    output: {dir: './docs'},
    preserveEntrySignatures: 'strict'
};