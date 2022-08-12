const path = require("path");

const webpackConfig = {

    //any file system is basically a graph 
    // here we are saying that configuration should enter from index.js inside src folder
	entry: path.resolve(__dirname, "src", "index.js"),

    //whatever config has compiled put that all in a main.js file inside dist folder
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},

    //mode : production means minify the code
	mode: "production"
};

module.exports = webpackConfig;
