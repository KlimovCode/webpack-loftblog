const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        'index': PATHS.source + '/index.js',
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        })
    ],
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only'
    },
    mode: 'development',
};

//  экспорт модуля в node.js
module.exports = function(env) {
    console.log(env);
    if (env === 'production') {
        return common;
    }
    if (env.development) {
        return Object.assign(
            {},
            common,
            developmentConfig
        );
    }
    
};
