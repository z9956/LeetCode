/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
	const map = new Map();

	for (let i = 0; i < heights.length; i++) {
		map.set(heights[i], names[i]);
	}

	heights.sort((a, b) => b - a);

	return heights.map(height => map.get(height));
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));

/*
* 输入：names = ["Mary","John","Emma"], heights = [180,165,170]
输出：["Mary","Emma","John"]
解释：Mary 最高，接着是 Emma 和 John 。
示例 2：

输入：names = ["Alice","Bob","Bob"], heights = [155,185,150]
输出：["Bob","Alice","Bob"]
解释：第一个 Bob 最高，然后是 Alice 和第二个 Bob 。
* */
