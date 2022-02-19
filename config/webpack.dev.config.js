const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const mockMiddleware = require('./mock.config');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const PORT = 8080;

// 用来检测打包速度
const smp = new SpeedMeasurePlugin();

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
	devServer: {
		contentBase: path.join(__dirname, '.'),
		historyApiFallback: false,
		hot: false,
		host: '0.0.0.0',
		port: PORT,
		before(app) {
			const projectDir = path.resolve();
			const mockDir = './mock';
			app.use(mockMiddleware({projectDir, mockDir}));
		},
	}
}

module.exports = smp.wrap(merge(webpackBaseConfig, webpackDevConfig));
