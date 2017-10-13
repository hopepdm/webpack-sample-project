module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件，_dirname只当前文件所在路径
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}
