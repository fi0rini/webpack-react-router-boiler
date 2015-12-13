var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    resolve: {
        root: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'static', 'assets'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['','.js','.jsx']
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        'babel-polyfill',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin([/node_modules/])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {test: /\.css$/, loader:'style-loader!css-loader'},
            {test: /\.json/, loader: 'json-loader'},
            {test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/, loader: 'url-loader' },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader' }
            // {test: /\.md$/, loader: 'html!markdown' },
        ]
    }
};
