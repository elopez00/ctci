/**
 * Determines if all elements in a string are unique
 * 
 * Method #1 using sets
 * time complexity O(n)
 * space complexity O(n)
 * 
 * @param {String} str string value
 * @return {Bool} bool that is true or false depending if the string has all unique characters
 */
const isUniqueSet = str => new Set(str).size === str.length

/**
 * Determines if all elements in a string are unique
 * 
 * Method #2 using objects
 * time complexity O(n)
 * space complexity O(n)
 * 
 * @param {String} str string value
 * @return {Bool} bool that is true or false depending if the string has all unique characters
 */
const isUniqueMap = str => {
    let strObj = {} // object

    for (let char of str) {
        if (!strObj[char]) { // if the character doesn't exist in the map, assign any value
            strObj[char] = 1
        } else { // if the character does exist in the map, that means there was a repeat letter
            return false
        }
    }
    
    // if the function was able to complete with returning false, then the string must be unique
    return true
}

/**
 * Determines if all elements in a string are unique
 * 
 * Method #3 No Data Structures
 * time complexity O(n)
 * space complexity O(n)
 * 
 * @param {String} str string value
 * @return {Bool} bool that is true or false depending if the string has all unique characters
 */
const isUnique = str => {
    let aasci = [] // define an aasci array

    for (let i = 0; i < 256; i++) {
        aasci[i] = false // set all values of that aasci array to false
    }

    for (let i in str) {
        if (!aasci[str.charCodeAt(i)]) {
            aasci[str.charCodeAt(i)] = true
        } else {
            return false
        }
    }

    return true
}


module.exports = { isUniqueMap, isUniqueSet, isUnique }