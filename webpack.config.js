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
	},
	plugins: [
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
	]
};
