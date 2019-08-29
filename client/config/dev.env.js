var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:8900"',
  VERSION: '"1.0.3"',
  historyApiFallback: true
})
