'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GUID:'""',
  API_URL:'"https://abr.business.gov.au/json/MatchingNames.aspx"'
})
