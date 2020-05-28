const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
export function isObject(val: any): val is Object {
  // typeof null 也是object， typeof [] 也是object, 所以这个地方就不用typeof了
  // return val !== null && typeof val === 'object'

  return toString.call(val) === '[object Object]'
}
