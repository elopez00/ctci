/**
 * Checks to see if one string is a permutation of another
 * 
 * Method #1: Frequency counters with objects
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {String} str1 first string
 * @param {String} str2 second string
 * @return {Boolean} boolean if they are permutations
 */
const checkPermutationObj = (str1, str2) => {
    let freqCount1 = {}
    let freqCount2 = {}

    for (let char of str1) {
        freqCount1[char] = freqCount1[char] + 1 || 1
    }

    for (let char of str2) {
        freqCount2[char] = freqCount2[char] + 1 || 1
    }

    for (let key in freqCount1) {
        if (!freqCount2[key]) return false
        if (freqCount1[key] !== freqCount2[key]) return false
    }

    return true
}

/**
 * Checks to see if one string is a permutation of another
 * 
 * Method #2: No Data strucutres
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {String} str1 first string
 * @param {String} str2 second string
 * @return {Boolean} boolean if they are permutations
 */
const checkPermutation = (str1, str2) => {
    let freq1 = Array(256)
    let freq2 = Array(256)

    freq1.fill(0)
    freq2.fill(0)

    for (let i in str1) 
        freq1[str1.charCodeAt(i)] += 1
    for (let i in str2)
        freq2[str2.charCodeAt(i)] += 1

    for (let i in freq1) {
        if (freq1[i] !== freq2[i]) return false
    }

    return true
}

module.exports = { checkPermutationObj, checkPermutation }