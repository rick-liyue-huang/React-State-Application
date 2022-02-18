const path = require('path');
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');

const webpackProdConfig = {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin({
			protectWebpackAssets: true
		}), //用于清除打包输出的历史文件，避免冲突
		new HtmlWebpackPlugin({
			inject: 'body',
			title: 'React State App',
			filename: 'index.html',
			template: path.join(__dirname, '../src/index.html'),
		})
	]
}

module.exports = merge(webpackBaseConfig, webpackProdConfig);
