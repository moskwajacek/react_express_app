const nodeExternals = require('webpack-node-externals');
const path = require('path');
module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, 'src/server/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        publicPath: '/bulid/',
        filename: 'server.js',
        library: 'app',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            components: path.resolve(__dirname, '..', 'src/client/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    publicPath: 'images',
                    outputPath: 'images'
                  }
                }
              },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader?emitFile=false'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?emitFile=false'
            }
        ]
    }
};