/**
 * URLify a string
 * 
 * Method #1 - No Restrictions
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {String} str input string
 * @return {String} output string
 */
const URLifyJS = str => str.trim().replace(/\s/g, "%20")

/**
 * URLify a string
 * 
 * Method #2 - No functions
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {String} str input string
 * @return {String} output string
 */
const URLify = str => {
    let output = "" // output string
    let foundFirst = false // identifies first char

    // loop through all indeces of string
    for (let i in str) {
        // check if first char is a space
        if (i < 1) {
            if (str[i] === " ") continue
            else {
                foundFirst = true
                output += str[i]
            }
        } else {
            // if str[i] === " " but str[i-1] === " " continue the loop
            if (str[i] !== " " && !foundFirst) {
                foundFirst = true
                output += str[i]
            } else if (str[i] === " " && str[i-1] === " ") {
                continue
            }  else if (str[i] === " " && !foundFirst) {
                continue
            } else if (str[i] === " ")  {
                output += "%20"
            } else output += str[i]
        }
    }

    if (output.substring(output.length - 3) === "%20") {
        return output.substring(0, output.length-3)
    }

    return output
}

module.exports = { URLify, URLifyJS }