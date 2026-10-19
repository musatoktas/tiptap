export function fromString(value: any): any {
  if (typeof value !== 'string') {
    return value
  }

  if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    const number = Number(value)

    if (/^[+-]?\d+$/.test(value) && !Number.isSafeInteger(number)) {
      return value
    }

    return number
  }

  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  return value
}
