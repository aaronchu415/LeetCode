// _NAME: Rotate Matrix (1.7)
// _LINK: http://www.crackingthecodinginterview.com/
// _CATEGORY: CTCI

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  function transpose(m) {
    let mid = Math.floor(m.length / 2)

    for (let r = 0; r < m.length; r++) {
      for (let c = r; c < m.length; c++) {

        let t = m[r][c]
        m[r][c] = m[c][r]
        m[c][r] = t
      }
    }
  }

  function flip(m) {

    let mid = Math.floor(m.length / 2)

    for (let r = 0; r < mid; r++) {
      for (let c = 0; c < m[r].length; c++) {
        let curr = m[r][c]
        let inverse = m[(m.length - 1) - r][c]

        m[r][c] = inverse
        m[(m.length - 1) - r][c] = curr

      }
    }

  }

  flip(matrix)
  transpose(matrix)


};
