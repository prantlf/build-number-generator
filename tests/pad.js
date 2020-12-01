import { pad2, pad3 } from '../lib/pad'
import test from 'tap'

test.test('pad2 pads one digit', test => {
  test.equal(pad2(1), '01')
  test.end()
})

test.test('pad2 does not pads two digits', test => {
  test.equal(pad2(12), '12')
  test.end()
})

test.test('pad3 pads one digit', test => {
  test.equal(pad3(1), '001')
  test.end()
})

test.test('pad3 pads two digits', test => {
  test.equal(pad3(12), '012')
  test.end()
})

test.test('pad3 does not pads three digits', test => {
  test.equal(pad3(123), '123')
  test.end()
})
