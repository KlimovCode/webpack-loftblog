const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge({
        entry: {
            'index': PATHS.source + '/index.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack app config',
                template: PATHS.source + '/index.pug' // template (HtmlWebpackPlugin) — путь до шаблона
            })
        ]
    },
    pug()
);

//  экспорт модуля в node.js
module.exports = function(env) {
    console.log(env);
    if (env === 'production') {
        return common;
    }
    if (env.development) {
        return merge([
            common,
            devserver()
        ]);
    }
};
