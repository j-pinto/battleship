const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",

	entry: {
		script: "./src/script.js",
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Battleship",
			template: "./src/index.html",
		}),
	],

	devServer: {
		static: "./dist",
	},
	devtool: "inline-source-map",
};
