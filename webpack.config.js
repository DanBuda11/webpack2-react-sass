const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
	// Set filename for compiled CSS
	filename: 'main.css'
});

module.exports = {
	entry: './app/index.js',
	devServer: {
		contentBase: './dist'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// Set filename for compiled JS
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpe?g|svg)$/,
				use: [
					{
						loader: 'url-loader',
						// Set max image size limit for url-loader
						// Images above limit will compile as separate
							// files when Webpack compiles
						options: { limit: 8192 }
					}
				]
			}
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			filename: 'index.html'
		})
	]
};