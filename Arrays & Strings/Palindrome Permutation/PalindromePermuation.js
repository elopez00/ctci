/**
 * Palindrome Permutation
 * 
 * Method #1 
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 * 
 * @param {String} str string verified for palindrome permutation
 * @return {Bool} result of verification
 */
const palindromePermutation = str => {
    // assign char of str to freq counter
    let freq = {}

    for (let char of str) {
        // test that the char isn't non-letter val
        if (/[a-zA-z]/.test(char)) {
            let lowerCase = char.toLowerCase()
            freq[lowerCase] = freq[lowerCase] ? freq[lowerCase] + 1 : 1 
        } else continue
    }

    let oddNum = 0
    for (let key in freq) {
        if (freq[key] % 2 != 0) oddNum ++
    }

    return oddNum <= 1
}

module.exports = { palindromePermutation }