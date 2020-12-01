import { validate as validateBuildNumber } from '..'
import test from 'tap'

const { build: validBuild } = require('./shared/build')

test.test('exports the `validate` method', test => {
  test.equal(typeof validateBuildNumber, 'function')
  test.end()
})

test.test('succeeds validating a valid build number', test => {
  const valid = validateBuildNumber(validBuild)
  test.equal(valid, true)
  test.end()
})

test.test('succeeds validating a product version with build number', test => {
  const valid = validateBuildNumber('1.0.3.' + validBuild)
  test.equal(valid, true)
  test.end()
})

test.test('fails validating an invalid build number', test => {
  const valid = validateBuildNumber('abc')
  test.equal(valid, false)
  test.end()
})

test.test('fails validating a build number with an invalid date', test => {
  const valid = validateBuildNumber('180035392')
  test.equal(valid, false)
  test.end()
})

test.test('fails with a null input too', test => {
  const valid = validateBuildNumber()
  test.equal(valid, false)
  test.end()
})
