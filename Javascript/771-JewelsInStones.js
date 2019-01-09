You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewelsInStones = 0;
    
    for (var x = 0; x < J.length; x++) {
        for (var y = 0; y < S.length; y++) {
            if (J.charAt(x) == S.charAt(y)) {
                jewelsInStones++;
            }
        }
    }
    
    return jewelsInStones
    
};

// J = types of stones
// S = stones