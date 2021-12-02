/**
 * @param {number} n
 */
var OrderedStream = function(n) {
	this.res = new Array(n).fill('');
	this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
	let res = [];

	if (idKey === this.ptr) {
		this.res[idKey - 1] = value;
		res.push(value);
		this.ptr = this.ptr + 1;

		while (this.ptr <= this.res.length && this.res[this.ptr - 1] !== '') {
			res.push(this.res[this.ptr - 1]);
			this.ptr = this.ptr + 1;
		}
	} else {
		this.res[idKey - 1] = value;
	}
	return res;
};
/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
