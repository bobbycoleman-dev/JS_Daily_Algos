/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Bonus: Make it O(n) time
*/

const res = require("express/lib/response");

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {
	const result = [];
	for (let i = 0; i < numbers.length; i++) {
		let currentSum = numbers[i];
		for (let j = i + 1; j < numbers.length; j++) {
			if (currentSum + numbers[j] == targetSum) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}

console.log(twoSum(numbers1, targetSum1), "should equal", expected1);
console.log(twoSum(numbers2, targetSum2), "should equal", expected2);
console.log(twoSum(numbers3, targetSum3), "should equal", expected3);

/*****************************************************************************/

/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution

    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

    Hard Bonus: make it O(n) time
*/

const numbers1_1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1_1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const numbers2_1 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2_1 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers3_1 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3_1 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(numbers, k) {
	let result = [];

	let maxCount = 0;

	for (let i = 0; i < numbers.length; i++) {
		let count = 0;
		for (let j = 0; j < numbers.length; j++) {
			if (numbers[i] == numbers[j]) {
				count++;
			}

			if (count > maxCount) {
				maxCount = count;
				result.push(numbers[i]);
			}
		}
	}
	return result;
}

// console.log(kMostFrequent(numbers1_1, k1));
