Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    
    var lowerCaseString = "";
    var lowerCaseCharCode = 0;
    
    //If uppercase, then go lowercase
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            lowerCaseCharCode = str.charCodeAt(i) + 32;
            lowerCaseString += String.fromCharCode(lowerCaseCharCode);
        } else {
            lowerCaseString += str.charAt(i);
        }     
    }
    
    return lowerCaseString;
    
};