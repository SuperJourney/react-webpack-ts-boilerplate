import { Configuration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import merge from 'webpack-merge'
import BaseConfig from './base.config'

const devServerConfig: DevServerConfiguration = {
  port: 8080,
  hot: true,
  open: true,
}

const devConfig: Configuration = merge(BaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: devServerConfig,
})

export default devConfig
