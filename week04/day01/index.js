/* 
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.

  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

const str7 = "cerraac"; // racecar
const expected7 = true;
/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
	// PATTER:
	// If there's one odd count and the rest are even --> TRUE
	// If there's more than one odd count or empty --> FALSE

	// Create frequency map
	const freq = {};
	for (const char of str) {
		if (freq[char]) {
			freq[char]++;
		} else {
			freq[char] = 1;
		}
	}

	// Count odds in frequency map
	let oddCount = 0;
	for (const key of Object.keys(freq)) {
		if (freq[key] % 2 != 0) {
			oddCount++;
		}
	}

	// Check if odd count is more than 1
	if (oddCount > 1 || str.length == 0) {
		return false;
	} else {
		return true;
	}
}

console.log(canStringBecomePalindrome(str1), "should be", expected1);
console.log(canStringBecomePalindrome(str2), "should be", expected2);
console.log(canStringBecomePalindrome(str3), "should be", expected3);
console.log(canStringBecomePalindrome(str4), "should be", expected4);
console.log(canStringBecomePalindrome(str5), "should be", expected5);
console.log(canStringBecomePalindrome(str6), "should be", expected6);
console.log(canStringBecomePalindrome(str7), "should be", expected7);

/*****************************************************************************/
