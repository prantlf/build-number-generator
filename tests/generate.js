import { generate as generateBuildNumber } from '../dist/index.mjs'
import { build as expectedBuild } from './shared/build.js'
import { strictEqual } from 'node:assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

test('exports the `generate` method', () => {
  strictEqual(typeof generateBuildNumber, 'function')
})

test('generates a new build number by default', () => {
  const build = generateBuildNumber()
  strictEqual(build, expectedBuild)
})

test('appends the new build number after the product version', () => {
  const build = generateBuildNumber('1.0.3')
  strictEqual(build, `1.0.3.${expectedBuild}`)
})

test('appends the new build number with an object parameter', () => {
  const build = generateBuildNumber({ version: '1.0.3' })
  strictEqual(build, `1.0.3.${expectedBuild}`)
})

test('can use a custom product version separator', () => {
  const build = generateBuildNumber({ version: '2018/06', versionSeparator: '-' })
  strictEqual(build, `2018/06-${expectedBuild}`)
})
