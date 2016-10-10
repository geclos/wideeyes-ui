import webpack from 'webpack'
import { buildConfig } from './webpack.config'

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function build () {
  return new Promise((resolve, reject) => {
    const bundler = webpack(buildConfig)
    bundler.run(err => {
      if (err) return reject(err)
      resolve()
    })
  })
}

export default build
