/*
 * @Author: yangtmm 
 * @Date: 2017-11-23 18:13:29 
 * @Last Modified by: yangtmm
 * @Last Modified time: 2017-11-23 18:15:23
 */

var webpack = require("webpack");
var merge = require("webpack-merge");

var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


var path = require('path');

module.exports = merge({}, {
    entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, '../lib'),
		publicPath: "lib",
		filename: "main.js", //打包后输出的文件名
		chunkFilename: 'chunk.js'
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		immutable: 'Immutable'
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
		alias: {
			components: path.join(__dirname, '../src/components'),
			reducers: path.join(__dirname, '../src/reducers'),
			store: path.join(__dirname, '../src/store'),
			routes: path.join(__dirname, '../src/routes'),
			assets: path.join(__dirname, '../src/assets'),
			utils: path.join(__dirname, '../src/utils'),
			api: path.join(__dirname, '../src/api')
		},
	},
	module: {
		loaders: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.(jpg|png|gif)$/,
				loader: 'url?limit=8192',
				
			},
			{
				test: /\.css$/,
				loaders: ["style", "css"]
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]",
			},{
				test: /\.(less)$/,
				loaders: [
					"style",
					"css",
					`less-loader?{"sourceMap":true`,
				]
			}
		]
	},
    devtool: "cheap-module-eval-source-map",
    plugins: [
		new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */ "vendor",
            /* filename= */ "vendor.bundle.js"
        ),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10240
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": '"development"'
        })
    ],
    devServer: {
		historyApiFallback:true,
        hot: true,
        inline: true,
        port: 3000,
        host: "localhost"
    }
});
