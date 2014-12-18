//var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require('path');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var BannerPlugin = require('webpack/lib/BannerPlugin');
module.exports = {
	entry: {
		filter: './src/filter',
		sort: './src/sort'
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
		/*function () {
		 this.plugin('this-compilation', function (compilation) {
		 compilation.mainTemplate.plugin('render', function (bootstrapSource, chunk, hash, moduleTemplate, dependencyTemplates) {
		 var ConcatSource = require('./webpack/lib/ConcatSource');
		 var source = new ConcatSource();
		 source.add('(function(modules) {\n');
		 source.add(bootstrapSource);
		 source.add('\n })\n');
		 source.add('\n');
		 source.add(' (');
		 var modules = this.renderChunkModules(chunk, moduleTemplate, dependencyTemplates);
		 source.add(this.applyPluginsWaterfall('modules', modules, chunk, hash, moduleTemplate, dependencyTemplates));
		 source.add(')');
		 return source;
		 });
		 });
		 }*/
		//    new CommonsChunkPlugin('smorgasbord.js', ['filter', 'sort'])
	],
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'smorgasbord.[name].js',
		library: ['smorgasbord', '[name]'],
		libraryTarget: 'umd2'
	}
};
