const R = require('../rambda')

test('', () => {
  expect(R.match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])

  // expect(R.match(/a./g)('foo')).toEqual([])

  // expect(() => { R.match(/a./g, null) }).toThrow()
})
