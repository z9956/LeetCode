/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
	let x = 0;

	const add = '++';
	for (const operation of operations) {
		if (operation.startsWith(add) || operation.endsWith(add)) {
			x++;
		} else {
			x--;
		}
	}

	return x;
};

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
