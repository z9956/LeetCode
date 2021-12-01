/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
	const map = new Set();

	for (let i = 0; i < paths.length; i++) {
		map.add(paths[i][0]);
	}

	for (const path of paths) {
		if (!map.has(path[1])) return path[1];
	}
	return '';
};

/*
* 输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
输出："Sao Paulo"
解释：从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo"
* */
console.log(destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]));
console.log(destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]));
