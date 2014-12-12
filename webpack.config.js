//var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require('path');
module.exports = {
    entry: {
        filter: './src/filter',
        sort: './src/sort'
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'smorgasbord.[name].js',
        library: ['smorgasbord', '[name]'],
        libraryTarget: 'umd'
    }
    //plugins: [
    //    new CommonsChunkPlugin('smorgasbord.js', ['filter', 'sort'])
    //]
};
