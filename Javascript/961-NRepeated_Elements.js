// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

/*
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    
    var mostRepeatedNumber = 0;
    var mostRepeatedNumberCounter = 1;
    var temp = 0;
    
    for (var i = 0; i < A.length; i++) {
        for (var j = i; j < A.length; j++) {
            if (A[i] == A[j]) {
                temp++;
            }
            
            if (temp > mostRepeatedNumberCounter) {
                mostRepeatedNumberCounter = temp;
                mostRepeatedNumber = A[i];
            }
        }
        temp = 0;
    }
    
    
    return mostRepeatedNumber;
};