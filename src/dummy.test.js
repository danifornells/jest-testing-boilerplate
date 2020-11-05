import dummy from './dummy'

describe('A Dummy test file', () => {
  test('Checks dummy function returns "Hello"', () => {
    expect(dummy()).toBe('Hello')
  })
})