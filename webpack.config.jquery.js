var path = require('path');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var BannerPlugin = require('webpack/lib/BannerPlugin');

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
	},
	plugins: [
		new UglifyJsPlugin({
			output: {
				beautify: true,
				bracketize: true,
				width: 160
			},
			compress: {
				sequences: false,
				conditionals: false,
				comparisons: false,
				evaluate: false,
				booleans: false,
				loops: false,
				join_vars: false,
				cascade: false

			},
			mangle: false
		}),
		new BannerPlugin(
			'/*jshint -W106, -W062*/\n/*globals module, define, exports*/', {
				raw: true,
				entryOnly: true
			}
		)
	]
};
