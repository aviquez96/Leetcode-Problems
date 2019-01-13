// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    var evenArray = new Array();
    var oddArray = new Array();
    
    // If even number, put it in array A; else, in array B
    A.forEach(number => {
        if (number%2 == 0) {
            evenArray.push(number)
        } else {
            oddArray.push(number);
        }
    })
    
    return evenArray.concat(oddArray);
    
};