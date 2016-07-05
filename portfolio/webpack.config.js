module.exports = {
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
						'es2015', 'react'

					]
				}
			}
		]
	}

}