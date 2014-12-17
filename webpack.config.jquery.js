//var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require('path');
module.exports = {
    entry: {
        jquery: './src/jquery-plugin'
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'jquery.smorgasbord.js',
        library: ['smorgasbord', '[name]'],
        libraryTarget: 'umd',
        runtimePrefix: '',
        runtimeDivider: ''
    },
    externals: {
        'jquery': 'jQuery'
    }
};
