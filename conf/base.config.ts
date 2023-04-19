import { Configuration } from 'webpack'
import path from 'path'
import { rootPath } from './vars'
import HtmlWebpackPlugin from 'html-webpack-plugin'


const config: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(rootPath, 'src/main.tsx'),
    },
    
    module: {
        rules: [
            {
                test: /\.(png|jpg|git|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 128,
                            name: 'static/[name].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // Remove this line to enable type checking in webpack builds
                        transpileOnly: true,
                        compilerOptions: {
                            module: 'esnext',
                        },
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src/template/index.html'),
            title: 'Custom Title'
        })
    ],
    resolve: {
            extensions: ['.tsx', '.ts', '.js'],
    }
}

export default config 