// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {    
    
    var position = [0,0]; 
    
    for (var i = 0; i < moves.length; i++) {
        if (moves.charAt(i) == "U") {
            position[0] += 1; 
        } else if (moves.charAt(i) == "D") {
            position[0] -= 1; 
        } else if (moves.charAt(i) == "R") {
            position[1] += 1; 
        } else if (moves.charAt(i) == "L") {
            position[1] -= 1; 
        }
    }    
    
    if (position[0] == 0 & position [1] == 0) {
        return true;
    } else {
        return false;
    }  
};