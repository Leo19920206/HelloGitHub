var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
	// context:"",
	entry:{
		"h0":'./src/script/o0.js',//with css enable
		"h1":'./src/script/o1.js'
	},
	output:{
		path:'./dist',
		filename:'/js/[name]-[chunkhash]-bundle.js',
		publicPath:"wwww.cdn"
	},
	plugins: [
        new htmlWebpackPlugin({
        	"filename":'./view/h0-[-hash-].html',
        	"template":'./index.html',
        	"title":"htmlWebpackPlugin",
        	"favicon":'',
        	"inject":true,//true,false,'head','body';
        	"date":new Date(),
        	"minify":{
        		// "removeComments":true,
        		// "removeTagWhitespace":true,
        		// "collapseWhitespace":true,
        	}
        }),
        new htmlWebpackPlugin({
        	"filename":'./view/h1-[-hash-].html',//context is outptu.path
        	"template":'./index.html',
        	"title":"htmlWebpackPlugin",
        	"favicon":'',
        	"inject":true,//true,false,'head','body';
        	"date":new Date(),
        	"minify":{
        		// "removeComments":true,
        		// "removeTagWhitespace":true,
        		// "collapseWhitespace":true,
        	}
        })
    ]

}