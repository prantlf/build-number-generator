import { parse as parseBuildTime } from '../dist/index.mjs'
import { date as expectedDate, build } from './shared/build.js'
import { ok, strictEqual, throws } from 'assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

function checkParsedBuild (date) {
  strictEqual(date.getYear(), expectedDate.getYear())
  strictEqual(date.getMonth(), expectedDate.getMonth())
  strictEqual(date.getDate(), expectedDate.getDate())
  strictEqual(date.getHours(), expectedDate.getHours())
  ok(Math.abs(date.getMinutes() - expectedDate.getMinutes()) <= 1)
}

test('exports the `parse` method', () => {
  strictEqual(typeof parseBuildTime, 'function')
})

test('parses a valid build number', () => {
  const date = parseBuildTime(build)
  checkParsedBuild(date)
})

test('parses a product version with build number', () => {
  const date = parseBuildTime('1.0.3.' + build)
  checkParsedBuild(date)
})

test('fails parsing an invalid build number', () => {
  throws(() => parseBuildTime('abc'))
})

test('fails parsing a build number with an invalid date', () => {
  throws(() => parseBuildTime('180035392'))
})

test('fails with a null input too', () => {
  throws(() => parseBuildTime('abc'))
})
