var MyHashMap = function() {
	this.base = 1000;
	this.data = new Array(this.base).fill(0).map(() => []);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
	const hash = key % this.base;

	for (const cur of this.data[hash]) {
		if (cur[0] === key) return cur[1] = value;
	}

	this.data[hash].push([key, value]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
	const hash = key % this.base;

	for (const cur of this.data[hash]) {
		if (cur[0] === key) {
			return cur[1];
		}
	}

	return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
	const hash = key % this.base;

	for (let i of this.data[hash]) {
		if (i[0] === key) {
			let index = this.data[hash].indexOf(i);
			this.data[hash].splice(index, 1);
		}
	}
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

/*
class MyHashMap {
	constructor() {
		this.data = new Array(Math.pow(10, 6)).fill(-1);
	}

	put(key, value) {
		this.data[key] = value;
	}

	get(key) {
		return this.data[key];
	}

	remove(key) {
		this.data[key] = -1;
	}
}*/
