import path from 'path';
import webpack from 'webpack';

export default {
   // devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
    ],
    output: {
        path: '/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'react-hot-loader/webpack', 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '*', '.js' ]
    },
    mode: 'development'
}