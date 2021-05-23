const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

/**
 *  При сборке для каждой страницы будет создан свой бандл. 
 *  В точку входа common я вынес общие скрипты для всех страниц. 
 *  Чтобы подключить наши бандлы на страницы воспользуемся плагином Webpack'a HtmlWebpackPlugin.
 */
const common = merge({
        entry: {
            'common': PATHS.source + '/common.js',
            'index': PATHS.source + '/index.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack app config',
                // В chunks указываем бандлы, необходимые для этой страницы (очередность: справа на лево). 
                chunks: [ 'index', 'common'],
                // template (HtmlWebpackPlugin) — путь до шаблона
                template: PATHS.source + '/index.pug' 
            }),
        ],
        // Если мы имеем общие модули/сторонние библиотеки подключенные на разных страницах, 
        // создадим общие бандлы для этих страниц
        optimization: {
            splitChunks: {
                chunks: "all",
                minChunks: 2,
                minSize: 1,
            }
        },
    },
    pug()
);

//  экспорт модуля в node.js
module.exports = function(env) {
    console.log(env);
    if (env.production) {
        return merge([
            common,
            extractCSS()
        ])
    }
    if (env.development) {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};
