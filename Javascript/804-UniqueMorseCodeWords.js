// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var alphabetInMorseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    var wordsArray = new Array();

    //get the characters of the input, and map them to morse
    words.forEach(word => {
        var morseMappedCharCode = 0
        var wordInMorseCode = ""
        for (var i = 0; i < word.length; i++) {
            morseMappedCharCode = word.charCodeAt(i) - 97;
            wordInMorseCode += (alphabetInMorseCode[morseMappedCharCode]);
        }
        
        if (wordsArray.includes(wordInMorseCode) == false) {
            wordsArray.push(wordInMorseCode);  
        }             
    })
    
    return wordsArray.length
};