'use strict'

const parseBuildTime = require('..').parse
const test = require('tap')

const { date: expectedDate, build } = require('./shared/build')

function checkParsedBuild (date) {
  test.equal(date.getYear(), expectedDate.getYear())
  test.equal(date.getMonth(), expectedDate.getMonth())
  test.equal(date.getDate(), expectedDate.getDate())
  test.equal(date.getHours(), expectedDate.getHours())
  test.ok(Math.abs(date.getMinutes() - expectedDate.getMinutes()) <= 1)
}

test.test('exports the `parse` method', test => {
  test.equal(typeof parseBuildTime, 'function')
  test.end()
})

test.test('parses a valid build number', test => {
  const date = parseBuildTime(build)
  checkParsedBuild(date)
  test.end()
})

test.test('parses a product version with build number', test => {
  const date = parseBuildTime('1.0.3.' + build)
  checkParsedBuild(date)
  test.end()
})

test.test('fails parsing an invalid build number', test => {
  test.throws(() => {
    parseBuildTime('abc')
  })
  test.end()
})

test.test('fails parsing a build number with an invalid date', test => {
  test.throws(() => {
    parseBuildTime('180035392')
  })
  test.end()
})

test.test('fails with a null input too', test => {
  test.throws(() => {
    parseBuildTime('abc')
  })
  test.end()
})
