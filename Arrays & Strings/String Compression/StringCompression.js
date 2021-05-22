/**
 * Compressed String
 * 
 * Solution #1 Frequency Counter
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 * 
 * @param {String} str string that needs to be compressed
 * @returns {String} compressed or original string
 */
const stringCompression = str => {
    let count = 0
    let target = ""
    let compressed = ""
    for (let i in str) {
        if (str[i] != target) {
            compressed += `${target}${count || ""}`
            target = str[i]
            count = 0
        } 
        count++
    }
    compressed += `${target}${count}`
    
    if (compressed.length >= str.length) {
        return str
    } else {
        return compressed
    }
}

module.exports = { stringCompression }