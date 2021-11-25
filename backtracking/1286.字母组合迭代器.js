/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
	this.characters = characters;
	this.combinationLength = combinationLength;
	this.allCombine = [];
	this.combineChar(this.characters, '');
	this.allCombine.slice();
};

CombinationIterator.prototype.combineChar = function (char, path) {
	if (path.length === this.combinationLength) return this.allCombine.push(path.slice());

	for (let i = 0; i < char.length; i++) {
		this.combineChar(char.slice(i + 1), path + char[i]);
	}
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
	return this.allCombine.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
	return this.allCombine.length > 0;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const iterator = new CombinationIterator('abc', 2); // 创建迭代器 iterator

//iterator.allCombine [ 'ab', 'ac', 'bc' ]

console.log(iterator.next()); // 返回 "ab"
console.log(iterator.hasNext()); // 返回 true
console.log(iterator.next()); // 返回 "ac"
console.log(iterator.hasNext()); // 返回 true
console.log(iterator.next()); // 返回 "bc"
console.log(iterator.hasNext()); // 返回 false
