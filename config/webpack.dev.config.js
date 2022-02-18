const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');

const PORT = 8080;

const webpackDevConfig = {
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // 热更新插件
		new HtmlWebpackPlugin({
			inject: 'body',
			title: 'React State App',
			filename: 'index.html',
			template: path.join(__dirname, '../src/index.html') // 浏览器插件，让其能够放入到指定的html网页中
		}),
		new OpenBrowserPlugin({
			url: `http://localhost:${PORT}/#/`
		}),
	],
	devtool: 'eval-source-map',
}

module.exports = merge(webpackBaseConfig, webpackDevConfig);
