const webpack = require('webpack');
module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './react/main.js',
	output:{
		path: './assets/bundles/',
		filename: 'main.bundle.js'
	},
	devServer: {
		inline:true,
		port:3000

	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets:[
						'es2015', 'react', "stage-2"

					]
				}
			}
		]
	},
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	]
};

