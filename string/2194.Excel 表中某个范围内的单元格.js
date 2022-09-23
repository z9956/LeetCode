/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
	let chars = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	const splitChar = s.split(':');
	let start = splitChar[0];
	let end = splitChar[1];

	const list = chars.slice(chars.indexOf(start[0]), chars.indexOf(end[0]) + 1);
	const res = [];

	for (let i = 0; i < list.length; i++) {
		for (let j = start[1]; j <= end[1]; j++) {
			res.push(`${list[i]}${j}`);
		}
	}

	return res;
};
