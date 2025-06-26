import { parse as parseBuildTime, format as formatBuildTime } from '../dist/index.mjs'
import { strictEqual } from 'node:assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

test('exports the `format` method', () => {
  strictEqual(typeof formatBuildTime, 'function')
})

test('formats a build number passed as a string', () => {
  const output = formatBuildTime('180625392')
  strictEqual(output, 'Mon Jun 25 2018 13:04')
})

test('formats a build number parsed to a Date instance', () => {
  const date = parseBuildTime('180625392')
  const output = formatBuildTime(date)
  strictEqual(output, 'Mon Jun 25 2018 13:04')
})

test('formats a build number including a product version', () => {
  const output = formatBuildTime('1.0.3.180625392')
  strictEqual(output, 'Mon Jun 25 2018 13:04')
})
