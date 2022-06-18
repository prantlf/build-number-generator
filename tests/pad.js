import { pad2, pad3 } from '../lib/pad.js'
import { strictEqual } from 'assert'
import tehanu from 'tehanu'

const test = tehanu(import.meta.url)

test('pad2 pads one digit', () => {
  strictEqual(pad2(1), '01')
})

test('pad2 does not pads two digits', () => {
  strictEqual(pad2(12), '12')
})

test('pad3 pads one digit', () => {
  strictEqual(pad3(1), '001')
})

test('pad3 pads two digits', () => {
  strictEqual(pad3(12), '012')
})

test('pad3 does not pads three digits', () => {
  strictEqual(pad3(123), '123')
})
