/**
 * One Away
 * 
 * Method #1 - Frequency Counters
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 * 
 * @param {String} str1 comparison string #1
 * @param {String} str2 comparison string #2
 * @return {Boolean} result of comparison
 */
let oneAway = (str1, str2) => {
    let edits = 1 // number of edits
    let maxLen = Math.max(str1.length, str2.length) // max length of largest array
    let diff = Math.abs(str1.length - str2.length) // the difference in length of each char

    // if the difference in length is greater than 2 than one of the strings cannot be one away thus returning false
    if (diff > edits) {
        return false
    }

    // loop through strings with maxlen value being the cieling
    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
        let c1 = str1[i]
        let c2 = str2[j]
        if (c1 !== c2) { // if the characters aren't equal then automatically assume we need one edit
            edits--
            if (edits < 0) { // if the edits are less than 0 than it isn't one away
                return false
            } 

            // if the current first char is equal to the next char in the second string, increase the count
            if (c1 === str2[j+1]) { 
                j++;
            } else if (c2 === str1[i+1]) { // else than it is a deletion
                i++;
            }
        }
    }

    return true
}

module.exports = { oneAway }