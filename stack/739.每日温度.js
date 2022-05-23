/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temperatures => {
	const res = new Array(temperatures.length).fill(0);
	const stack = [];
	for (let i = temperatures.length - 1; i >= 0; i--) {
		while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
			stack.pop();
		}
		if (stack.length) {
			res[i] = stack[stack.length - 1] - i;
		}
		stack.push(i);
	}
	return res;
};

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
