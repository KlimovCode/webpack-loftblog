module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: [
                        'style-loader', // style-loader — добавляет стили в DOM-дерево при помощи тега ˂style˃
                        'css-loader', // css-loader добавляет CSS модули в граф зависимостей
                        'sass-loader' // sass-loader комилирует SCSS в CSS
                    ]
                }
            ]
        }
    }
}