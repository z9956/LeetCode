/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	const map = new Map();
	let m = 0;
	let n = 0;

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			m++;
		} else {
			let count = map.get(secret[i]) ?? 0;
			if (count < 0) {
				n++;
			}

			map.set(secret[i], ++count);

			count = map.get(guess[i]) ?? 0;

			if (count > 0) {
				n++;
			}
			map.set(guess[i], --count);
		}
	}

	return `${m}A${n}B`;
};
/*
var getHint = function (secret, guess) {
	let arr = Array(secret.length + guess.length).fill(0);
	let m = 0;
	let n = 0;

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			m++;
		} else {
			if (arr[secret[i]]++ < 0) n++;
			if (arr[guess[i]]-- > 0) n++;
		}
	}

	return `${m}A${n}B`;
};


var getHint = function (secret, guess) {
	let bulls = 0;
	let cows = 0;

	const mapB = new Map();
	const mapC = new Map();

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			bulls++;
		} else {
			if (mapB.has(secret[i])) {
				mapB.set(secret[i], mapB.get(secret[i]) + 1);
			} else {
				mapB.set(secret[i], 1);
			}

			if (mapC.has(guess[i])) {
				mapC.set(guess[i], mapC.get(guess[i]) + 1);
			} else {
				mapC.set(guess[i], 1);
			}
		}
	}

	for (let [key, value] of mapC) {
		if (mapB.has(key)) {
			cows += Math.min(value, mapB.get(key));
		}
	}

	return `${bulls}A${cows}B`;
};
*/

console.log(getHint('1807', '7810')); //1A3B
