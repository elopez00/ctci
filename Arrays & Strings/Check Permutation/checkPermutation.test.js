const { expect } = require('@jest/globals')
const { checkPermutation, checkPermutationObj } = require('./checkPermutation')

test('false and eslaf are permutations', () => {
    expect(checkPermutation('false', 'eslaf')).toBe(true)
    expect(checkPermutationObj('false','eslaf')).toBe(true)
})

test('ban and tangarine are not permutations', () => {
    expect(checkPermutation('ban', 'tangarine')).toBe(false)
    expect(checkPermutationObj('ban', 'tangarine')).toBe(false)
})