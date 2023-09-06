/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[9, 8, 9]
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
	[1, 2, 3, 4, 5], // 0,0
	[1, 2, 3, 4, 5], // right 1,1    left 1,3
	[1, 2, 3, 4, 5], // right 2,2    left 2,2
	[1, 2, 3, 4, 5], // right 3,3    left 3,1
	[1, 2, 3, 4, 5] // length,length
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
	sumLeft = 0;
	sumRight = 0;

	for (let y = 0; y < sqrMatrix.length; y++) {
		sumLeft += sqrMatrix[y][y];
		sumRight += sqrMatrix[y][sqrMatrix.length - 1 - y];
	}

	return Math.abs(sumLeft - sumRight);
}

console.log(diagonalDifference(squareMatrix1), "should equal", expected1);
console.log(diagonalDifference(squareMatrix2), "should equal", expected2);
