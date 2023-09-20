/* 
Given by Riot games.
*/

// b : 70
// a : 164 -> 184
// c : 32 -> 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
	let result = "";

	const hash = {};
	for (let i = 0; i < s.length; i++) {
		if (isNaN(s[i])) {
			// if i is a letter
			let numString = "";
			let j = i + 1;
			while (!isNaN(s[j])) {
				// while j is a number
				numString += s[j];
				j++;
			}

			if (hash[s[i]]) {
				// if hash.i exists
				hash[s[i]] += parseInt(numString);
			} else {
				hash[s[i]] = parseInt(numString);
			}
		}
	}

	let sorted = Object.keys(hash).sort();
	for (const letter of sorted) {
		result += letter + hash[letter];
	}

	return result;
}

console.log(rehash(str1));
/*****************************************************************************/
