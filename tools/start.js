import webpack from 'webpack'
import { watchConfig } from './webpack.config'
import WebpackDevServer from 'webpack-dev-server'

async function start () {
  return new Promise(resolve => {
    const server = new WebpackDevServer(webpack(watchConfig), {
      hot: true,
      stats: watchConfig.stats,
      publicPath: watchConfig.publicPath,
      contentBase: watchConfig.output.path
    })

    server.listen(3000, 'localhost')
  })
}

export default start
