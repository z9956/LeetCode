/**
 * @param {string} s
 * @return {number}
 */

var minLength = function (s) {
	const arr = [];

	for (const i of s) {
		if (arr.length === 0) {
			arr.push(i);
		} else {
			if (
				(arr[arr.length - 1] === 'A' && i === 'B') ||
				(arr[arr.length - 1] === 'C' && i === 'D')
			) {
				arr.pop();
			} else {
				arr.push(i);
			}
		}
	}

	return arr.length;
};
