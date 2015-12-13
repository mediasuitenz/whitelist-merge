/* global describe, it */
const merge = require('../.')
const expect = require('chai').expect

describe('whitelist merge', function () {
  it('throw an exception if arg1 is not an object', function () {
    expect(merge).to.throw(Error)
  })
  it('throw an exception if arg2 is not an object', function () {
    expect(merge.bind(this, {})).to.throw(Error)
  })
  it('throw an exception if arg3 is not an array', function () {
    expect(merge.bind(this, {}, {})).to.throw(Error)
  })
  it('merge 2 objects with a basic 2 property whitelist', function () {
    const whitelist = ['name', 'age']
    const object1 = {name: 'bob', gender: 'male'}
    const object2 = {age: 23, weight: '2.3'}
    const mergedObject = {name: 'bob', age: 23}
    expect(merge(object1, object2, whitelist)).to.deep.equal(mergedObject)
  })
  it('merge 2 objects with doubled up properties', function () {
    const whitelist = ['name', 'age', 'gender']
    const object1 = {name: 'bob', gender: 'male'}
    const object2 = {name: 'sally', age: 23, weight: '2.3', gender: 'female'}
    const mergedObject = {name: 'sally', age: 23, gender: 'female'}
    expect(merge(object1, object2, whitelist)).to.deep.equal(mergedObject)
  })
  it('merge 2 objects with nested properties', function () {
    const whitelist = ['address', 'name']
    const object1 = {name: 'bob', gender: 'male'}
    const object2 = {age: 23, address: {street: 'downing st', city: 'london'}}
    const mergedObject = {name: 'bob', address: {street: 'downing st', city: 'london'}}
    expect(merge(object1, object2, whitelist)).to.deep.equal(mergedObject)
  })
})
