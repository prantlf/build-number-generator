import { generate as generateBuildNumber } from '..'
import test from 'tap'

const { build: expectedBuild } = require('./shared/build')

test.test('exports the `generate` method', test => {
  test.equal(typeof generateBuildNumber, 'function')
  test.end()
})

test.test('generates a new build number by default', test => {
  const build = generateBuildNumber()
  test.equal(build, expectedBuild)
  test.end()
})

test.test('appends the new build number after the product version', test => {
  const build = generateBuildNumber('1.0.3')
  test.equal(build, '1.0.3.' + expectedBuild)
  test.end()
})

test.test('appends the new build number with an object parameter', test => {
  const build = generateBuildNumber({ version: '1.0.3' })
  test.equal(build, `1.0.3.${expectedBuild}`)
  test.end()
})

test.test('can use a custom product version separator', test => {
  const build = generateBuildNumber({ version: '2018/06', versionSeparator: '-' })
  test.equal(build, `2018/06-${expectedBuild}`)
  test.end()
})
