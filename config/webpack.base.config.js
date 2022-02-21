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
			pages: path.join(__dirname, '../src/pages'),
			common: path.join(__dirname, '../src/common'),
			context: path.join(__dirname, '../src/context'),
			'@utils': path.join(__dirname, '../src/utils/'),
			'@components': path.join(__dirname, '../src/components/'),
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
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						// 提升打包速度
						// transpileOnly: true
					}
				}
			},
			{
				test: /\.(sc|c)ss/,
				use: [
					devMode ?
					'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					}
				]
			}
		]
	}
}

module.exports = webpackBaseConfig;
