
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './app');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const blackMagic = require('../redux-black-magic');

const ignores = new webpack.WatchIgnorePlugin([
  path.resolve(APP_DIR + '/actions/index.js'),
  path.resolve(APP_DIR + '/reducers/index.js')
]);

const plugins = [
  ignores,
  new blackMagic({
    actionsFolder: path.resolve(APP_DIR + '/actions/'),
    reducersFolder: path.resolve(APP_DIR + '/reducers/')
  })
];

const config = {
  entry: [
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['latest', 'react', 'stage-0']
        }
      }
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  }
};

module.exports = config;
