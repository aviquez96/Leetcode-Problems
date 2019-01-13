// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

/*
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
    var transformedArray = new Array();
    
    A.forEach(item => {
        var temp = 0;
        
        //Reverse row
        for (var i = 0; i < Math.floor(item.length/2); i++) {
            temp = item[i];
            item[i] = item[item.length-i-1];
            item[item.length-i-1] = temp;            
        }
        
        //Inverse row
        for (var i = 0; i < Math.floor(item.length); i++) {
            if (item[i] == 1) {
                item[i] = 0;
            } else {
                item[i] = 1;
            }
        }
        
        transformedArray.push(item);
    })
    
    return transformedArray
    
};