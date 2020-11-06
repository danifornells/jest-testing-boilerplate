import dummy from './dummy'

describe('Dummy function', () => {
  test('Exists', () => {
    expect(dummy).toBeTruthy()
    expect(typeof dummy).toBe('function')
  })
})

describe.each`
    input       | expectedResult
    ${1}        | ${'1'}
    ${2}        | ${'2'}
  `('Given $input, expecting $expectedResult', ({ input, expectedResult }) => {

  test(`Input returns the expected result (${input} -> ${expectedResult})`, () => {
    expect(input.toString()).toBe(expectedResult)
  })

  test(`Output is a string`, () => {
    expect(typeof expectedResult).toBe('string')
  })
})
