'use strict'
const merge = require('merge')
const assert = require('assert')

module.exports = (object1, object2, whitelist) => {
  assert(typeof object1 === 'object', 'first argument must be an object')
  assert(typeof object2 === 'object', 'second argument must be an object')
  assert(Array.isArray(whitelist), 'third argument must be an array')
  let obj1 = {}
  let obj2 = {}

  whitelist.forEach(property => {
    if (typeof object1[property] !== 'undefined' && object1[property] !== null) {
      obj1[property] = object1[property]
    }
    if (typeof object2[property] !== 'undefined' && object2[property] !== null) {
      obj2[property] = object2[property]
    }
  })

  return merge(obj1, obj2)
}
