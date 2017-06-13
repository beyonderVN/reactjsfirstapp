var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: ['babel-polyfill','./app/client/index.jsx'],
  output: { path: __dirname, filename: './public/js/bundle.js' },
  resolve:{
    root: __dirname,
    alias: {
      // store: 'app/Manager.jsx',
      // List: 'app/components/List.jsx',
      // Note: 'app/components/Note.jsx',
      // NoteInput: 'app/components/NoteInput.jsx'
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','stage-2']
        }
      }
    ]
  },
};