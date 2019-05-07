const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/build/index'),
    mode: 'production',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './src/public/js')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
};