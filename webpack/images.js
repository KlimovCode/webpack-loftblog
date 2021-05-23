module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            // name: '[path][name].[ext]',
            name: 'images/[name].[ext]',
          },
        },
      ],
    },
  };