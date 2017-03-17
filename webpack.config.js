var htmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

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
        	"date":new Date(),//DIY options
        	"minify":{
        		// "removeComments":true,
        		// "removeTagWhitespace":true,
        		"collapseWhitespace":true
        	},
            // "chunks":["h0"]//自定义chunks
            // "exchunks":,
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
        	},
            // "chunks":["h1"]

        })
    ],
    module:{
        loaders:[
            // js 处理
            {
                "test":/\.js$/,
                "loader":"babel-loader",//-lodaer 后缀不能省略
                // "exclude": "./node_modules",//babel性能
                // "include":"./scr/script",//babel性能
                "include":path.resolve(__dirname,"/scr/script"),
                "exclude":path.resolve(__dirname,"/node_modules"),
                "query":{
                    "presets":["es2015"]
                }
            },
            // css 处理
            //  {
            //     "test":/\.css$/,
            //    "loader": "style-loader!css-loader",
            //     // "loader":ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            //     "include":path.resolve(__dirname,"/scr/css"),
            //     "exclude":path.resolve(__dirname,"/node_modules")
            //     // "query":{
            //     //     "presets":["es2015"]
            //     // }
            // }
            
        ],
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include:path.resolve(__dirname,"/scr/script"),
                exclude:path.resolve(__dirname,"/node_modules"),
            },

        ]
    }

}