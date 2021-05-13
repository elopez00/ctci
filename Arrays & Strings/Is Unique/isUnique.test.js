const { expect } = require('@jest/globals')
const { isUniqueSet, isUniqueMap, isUnique } = require('./isUnique') 

test('hello is not unique', () => {
    expect(isUniqueSet('hello')).toBe(false)
    expect(isUniqueMap('hello')).toBe(false)
    expect(isUnique('hello')).toBe(false)
})

test('leaving is unique', () => {
    expect(isUniqueSet('leaving')).toBe(true)
    expect(isUniqueMap('leaving')).toBe(true)
    expect(isUnique('leaving')).toBe(true)
})

test('1234[]/.,p5{ is unique', () => {
    expect(isUniqueSet('1234[]/.,p5{')).toBe(true)
    expect(isUniqueMap('1234[]/.,p5{')).toBe(true)
    expect(isUnique('1234[]/.,p5{')).toBe(true)
})