const path = require('path')
const node_modules = path.resolve(__dirname, 'node_modules')
const packageJSON = require('./package.json');

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

var PROD = JSON.stringify(JSON.parse(process.env.PROD_DEV || 'false')) === 'true';

console.log('* Starting Webpack');
console.log('* PROD = ' + PROD);

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: PATHS.build,
    filename: 'app-bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
}
