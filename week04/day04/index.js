/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.

See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7
// length: 7 (8-1) * Height: 7 = 49
// Area: width * height

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
	let max = 0;

	let left = 0;
	let right = heights.length - 1;
	while (left < right) {
		//Find min value between left and right
		let min = Math.min(heights[left], heights[right]);
		//Find max value between current max and area (right - left (length) * min (height))
		max = Math.max(max, min * (right - left));
		// Increment or decrement to meet while loop condition
		if (heights[left] < heights[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max;
}

console.log(containerWithMostWater(heights1), "should be", expected1);
console.log(containerWithMostWater(heights2), "should be", expected2);
console.log(containerWithMostWater(heights3), "should be", expected3);
console.log(containerWithMostWater(heights4), "should be", expected4);

/*****************************************************************************/
