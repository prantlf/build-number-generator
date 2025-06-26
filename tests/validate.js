import { validate as validateBuildNumber } from '../dist/index.mjs'
import { build as validBuild } from './shared/build.js'
import { strictEqual } from 'node:assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

test('exports the `validate` method', () => {
  strictEqual(typeof validateBuildNumber, 'function')
})

test('succeeds validating a valid build number', () => {
  const valid = validateBuildNumber(validBuild)
  strictEqual(valid, true)
})

test('succeeds validating a product version with build number', () => {
  const valid = validateBuildNumber(`1.0.3.${validBuild}`)
  strictEqual(valid, true)
})

test('fails validating an invalid build number', () => {
  const valid = validateBuildNumber('abc')
  strictEqual(valid, false)
})

test('fails validating a build number with an invalid date', () => {
  const valid = validateBuildNumber('180035392')
  strictEqual(valid, false)
})

test('fails with a null input too', () => {
  const valid = validateBuildNumber()
  strictEqual(valid, false)
})
