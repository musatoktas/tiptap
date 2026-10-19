import { describe, expect, it } from 'vite-plus/test'

import { fromString } from './fromString.js'

describe('fromString', () => {
  it('should return a string', () => {
    const value = fromString('test')

    expect(value).toBe('test')
  })

  it('should return an empty string', () => {
    const value = fromString('')

    expect(value).toBe('')
  })

  it('should convert to a number', () => {
    const value = fromString('1')

    expect(value).toBe(1)
  })

  it('should convert to a floating number', () => {
    const value = fromString('1.2')

    expect(value).toBe(1.2)
  })

  it('should keep an integer that is too big for a number', () => {
    const value = fromString('670877319835078893569')

    expect(value).toBe('670877319835078893569')
  })

  it('should keep a negative integer that is too small for a number', () => {
    const value = fromString('-9007199254740993')

    expect(value).toBe('-9007199254740993')
  })

  it('should convert the largest safe integer to a number', () => {
    const value = fromString('9007199254740991')

    expect(value).toBe(9007199254740991)
  })

  it('should not convert to a number with exponent', () => {
    const value = fromString('1e1')

    expect(value).toBe('1e1')
  })

  it('should convert to true', () => {
    const value = fromString('true')

    expect(value).toBe(true)
  })

  it('should convert to false', () => {
    const value = fromString('false')

    expect(value).toBe(false)
  })

  it('should return non-strings', () => {
    const value = fromString(null)

    expect(value).toBe(null)
  })
})
