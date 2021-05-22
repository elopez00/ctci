const { palindromePermutation } = require('./PalindromePermuation')

test("Tact Coa to be a palindrome permutation", () => {
    expect(palindromePermutation("Tact Coa")).toBe(true)
})

test("tarnation is not a palindrome", () => {
    expect(palindromePermutation("tarnation")).toBe(false)
})