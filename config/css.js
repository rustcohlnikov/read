'use strict'

var cssBlocksWebpackPlugin = require('@css-blocks/webpack')
var autoprefixer = require('autoprefixer')

module.exports = function (options) {
	let browsers = options.browsers || [
		'>1%',
		'last 4 versions',
		'Firefox ESR',
		'not ie < 9',
	]
	var assetOptions = {
		cssFiles: {
			'grid.css': 'public/lib/grid.css',
			'base.css': 'public/lib/base.css',
		},
		concat: {
			'css-blocks.css': {
				sources: ['grid.css', 'base.css', 'blocks.css'],
				postProcess: {
					postcss: [autoprefixer({ browsers })]
				},
			},
		},
		inlineSourceMaps: options.inlineSourceMaps,
	}
	return new cssBlocksWebpackPlugin.CssAssets(assetOptions)
}