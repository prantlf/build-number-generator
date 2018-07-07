'use strict'

const parseBuildTime = require('..').parse
const formatBuildTime = require('..').format
const test = require('tap')

test.test('exports the `format` method', test => {
  test.equal(typeof formatBuildTime, 'function')
  test.end()
})

test.test('formats a build number passed as a string', test => {
  const output = formatBuildTime('180625392')
  test.equal(output, 'Mon Jun 25 2018 13:04')
  test.end()
})

test.test('formats a build number parsed to a Date instance', test => {
  const date = parseBuildTime('180625392')
  const output = formatBuildTime(date)
  test.equal(output, 'Mon Jun 25 2018 13:04')
  test.end()
})

test.test('formats a build number including a product version', test => {
  const output = formatBuildTime('1.0.3.180625392')
  test.equal(output, 'Mon Jun 25 2018 13:04')
  test.end()
})
