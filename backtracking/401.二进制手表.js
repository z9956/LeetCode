/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
	const results = [];
	const hours = [1, 2, 4, 8, 0, 0, 0, 0, 0, 0];
	const minutes = [0, 0, 0, 0, 1, 2, 4, 8, 16, 32];

	const backtrack = (num, index, hour, minute) => {
		if (hour > 11 || minute > 59) return;

		if (num === 0) {
			results.push(`${hour}:${minute < 10 ? '0' + minute : minute}`);
		}

		for (let i = index; i < 10; i++) {
			backtrack(num - 1, i + 1, hour + hours[i], minute + minutes[i]);
		}
	};

	backtrack(turnedOn, 0, 0, 0);

	return results;
};
/*
 * 输入：turnedOn = 1
 * 输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 * */

console.log(readBinaryWatch(1));
