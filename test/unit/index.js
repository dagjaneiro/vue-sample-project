import Vue from 'vue'

Vue.config.productionTip = false

// Setup a browser environment
require('jsdom-global')()

// Register chai as promised
var chaiAsPromised = require('chai-as-promised')
window.chai.use(chaiAsPromised)

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
