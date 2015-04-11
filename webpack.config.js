var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './_app/main.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  
  module:  {
    loaders: [
      {test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 version', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!autoprefixer?browsers=last 2 version!less', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/}
    ]
  },

  plugins: [
    new ngAnnotatePlugin({
      add: true
    })
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    alias: {
      // 'angular-dropdowns': __dirname + '/node_modules/angular-dropdowns/dist/angular-dropdowns.js',
      // 'angulartics-ga': __dirname + '/node_modules/angulartics/src/angulartics-ga.js',
      // 'ng-simplePagination': __dirname + '/node_modules/ng-simplePagination/simplePagination.js'
    }
  }

};