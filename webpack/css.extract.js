const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
    Фактически создание и подключение отдельных css-файлов выполняет extract-text-plugin, 
    т.е. он заменяет собой style-loader. 
    Однако в тех случаях, когда extract-text-plugin не может выполнить свою работу, 
    будет применен fallback: style-loader. 

     publicPath — его обязательно нужно указать для того, 
     чтобы пути к картинкам для фоновых изображений, указанные в css-файлах, 
     были правильными после сборки
*/
module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            //"postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css",
      }),
    ],
  };
};
