// _NAME: Robot Return to Origin
// _LINK: https://leetcode.com/problems/robot-return-to-origin/
// _CATEGORY: Array-Integer

/**
There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

Input: "UD"
Output: true 
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

/**
 * @param {string} moves
 * @return {boolean}
 */

let input = "UD"


var judgeCircle = function (moves) {
  let movesList = moves.split('')

  let position = [0, 0]

  for (let i = 0; i < movesList.length; i++) {
    if (movesList[i] === 'U') position[0]++
    if (movesList[i] === 'D') position[0]--
    if (movesList[i] === 'R') position[1]++
    if (movesList[i] === 'L') position[1]--
  }

  return position[0] === 0 && position[1] === 0


};

console.log(maxProfit(judgeCircle));
