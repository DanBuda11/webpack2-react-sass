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
		filename: 'bundle.js',
		publicPath: '/'
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
				test: /\.(png|jp(e)g|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 8192 }
						// name: 'images/[hash]-[name].[ext]'
					},
					{
						loader: 'file-loader',
						options: {name: 'images/[name].[ext]' }
					}
				]
			}
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: './app/index.html'
			// filename: './dist/index.html'
		})
	]
};