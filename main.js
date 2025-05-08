/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    // Find the shortest string in the array
    let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);
    
    // Check each character of the shortest string
    for (let i = 0; i < shortest.length; i++) {
        // Check if this character is common to all strings
        for (let str of strs) {
            if (str[i] !== shortest[i]) {
                return shortest.substring(0, i);
            }
        }
    }
    
    return shortest;
}

module.exports = longestCommonPrefix;
