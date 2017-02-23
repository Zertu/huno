// Given a word, you need to judge whether the usage of capitals in it is right
// or not. We define the usage of capitals in a word to be right when one of the
// following cases holds: All letters in this word are capitals, like "USA". All
// letters in this word are not capitals, like "leetcode". Only the first letter
// in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
// Example 1: Input: "USA" Output: True Example 2: Input: "FlaG" Output: False
// Note: The input will be a non-empty word consisting of uppercase and
// lowercase latin letters.
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word : string) {
    // condition 1:all lowercase 
    // condition 0:all UpperCase 
    // condition 2:return false
    // condition -1:init
    // condition 3:like Google
    let condition = -1
    if (word.length == 1) {
        return true
    }
    if((word.charAt(0)>'A'||word.charAt(0)<'Z')&&(word.charAt(1) < 'A' || word.charAt(1) > 'Z')){
        condition=3
        for(let i=1;i< word.length; i++){
            if (word.charAt(i) < 'A' || word.charAt(i) > 'Z'){
              
            }else{
                return false
            }
        }
        return true
    }
    for (let i = 0; i < word.length; i++) {
        console.log(word.charAt(i))
        if (word.charAt(i) < 'A' || word.charAt(i) > 'Z') {
            if (condition == 0) {
                return false
            }else{
                condition =1
            }
        }else if(condition==1){
            return false
        }else{
            condition=0
        }

    }
    return true
}
