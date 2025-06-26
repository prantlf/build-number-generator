const { generate, validate, parse, format } = require('build-number-generator')
const { strictEqual } = require('node:assert')
const test = require('tehanu')(__filename)

test('exports all methods', () => {
  strictEqual(typeof generate, 'function')
  strictEqual(typeof validate, 'function')
  strictEqual(typeof parse, 'function')
  strictEqual(typeof format, 'function')
})
