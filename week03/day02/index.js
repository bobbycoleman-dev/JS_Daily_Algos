/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.

    return any object that matches all the key value pairs in the search
    criteria object.

    Try without built in methods (remember to check MDN/the .hasOwnProperty from yesterday!)

    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    For functional remember we can use things like .filter 😉
*/

const items = [
	{ firstName: "Bob", lastName: "Bobbert", age: 31 },
	{ firstName: "John", lastName: "Smith", age: 25 },
	{ firstName: "Bob", lastName: "Smith", age: 27 },
	{ firstName: "Bob", lastName: "White", age: 31 }
];

const searchCriteria1 = {
	firstName: "Bob",
	age: 31
};
const expected1 = [
	{ firstName: "Bob", lastName: "Bobbert", age: 31 },
	{ firstName: "Bob", lastName: "White", age: 31 }
];

const searchCriteria2 = {
	lastName: "Smith"
};
const expected2 = [
	{ firstName: "John", lastName: "Smith", age: 25 },
	{ firstName: "Bob", lastName: "Smith", age: 27 }
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
	let result = [];

	for (obj of collection) {
		for (key of Object.values(obj)) {
			if (key == Object.values(criteria)) {
				result.push(obj);
			}
		}
	}

	return result;
}

// console.log(findObjects(searchCriteria1, items));

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) {
	const result = [];
	for (let key of Object.keys(criteria)) {
		for (let obj of collection) {
			for (let key2 of Object.keys(obj)) {
				if (obj[key2] === criteria[key]) {
					result.push(obj);
				}
			}
		}
	}
	return result;
}

console.log(findObjectsFunctional(searchCriteria1, items));

/*****************************************************************************/
