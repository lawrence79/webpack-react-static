const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

// call options from ./lib
const options = require('./lib/webpackConfig');

// set babel env
process.env.BABEL_ENV = process.env.npm_lifecycle_event;

/*
* It can be convenient to define a vendor entry based on package.json dependencies.
* Load the file first using const pkg = require('./package.json'); and then do
* vendor: Object.keys(pkg.dependencies).

* ========================================
* const pkg = require('./package.json');
* vendor: Object.keys(pkg.dependencies)
* ========================================
*/

const PATHS = {
    app: path.join(__dirname, 'app'),
    style: [
        path.join(__dirname, 'app', 'main.css'),
        path.join(__dirname, 'node_modules', 'purecss')
    ],
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: PATHS.app,
        style: PATHS.style
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Static Boilerplate'
        })
    ],
    module: {
      loaders: [
            {
              test: /\.jsx?$/,
              // Enable caching for improved performance during development
              // It uses default OS directory by default. If you need
              // something more custom, pass a path to it.
              // I.e., babel?cacheDirectory=<path>
              loaders: ['babel?cacheDirectory'],
              // Parse only app files! Without this it will go through
              // the entire project. In addition to being slow,
              // that will most likely result in an error.
              include: PATHS.app
            }
        ]
    }
}


var config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(
            common, {
                devtool: 'source-map',
                output: {
                    path: PATHS.build,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            options.clean(PATHS.build),
            options.extractBundle({
                name: 'vendor',
                entries: ['react']
            }),
            options.minify(),
            options.extractCSS(PATHS.style),
            options.purifyCSS([PATHS.app])

        );
        break;

    default:
        config = merge(
            common, {
                devtool: 'eval-source-map'
            },
            options.setupCSS(PATHS.style),
            options.devServer({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config);
