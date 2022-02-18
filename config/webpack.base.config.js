const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';


const webpackBaseConfig = {
	entry: path.join(__dirname, '../src/index.jsx'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[fullhash:4].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// 配置路径别名，让文件之间互相加载
		alias: {
			pages: path.join(__dirname, '../src/pages')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.ts[x]/,
				use: 'ts-loader'
			},
			{
				test: /\.(sc|c)ss/,
				use: [
					devMode ?
					'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}

module.exports = webpackBaseConfig;
