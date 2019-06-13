// _NAME: Letter Tile Possibilities
// _LINK: https://leetcode.com/problems/letter-tile-possibilities/
// _CATEGORY: String

// You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.
// // /**
//  * @param { string } tiles
//   * @return { number }
//     * /
var numTilePossibilities = function (tiles) {

  var output = new Set()

  var _helper = function (remaining, string) {
    for (let j = 0; j < remaining.length; j++) {
      let s = string + remaining[j]
      if (!output.has(s)) output.add(s)
      let newRemain = remaining.substring(0, j) + remaining.substring(j + 1, remaining.length)
      _helper(newRemain, s)
    }
  }

  _helper(tiles, '')

  return output.size
}