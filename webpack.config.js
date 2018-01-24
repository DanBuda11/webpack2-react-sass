const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
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
				test: /\.(png|jp(e)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: { limit: 8192 }
				}]
			}
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: './app/index.html'
		})
	]
};