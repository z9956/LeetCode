/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    const hash = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - 97]++;
    }

    const results = [];
    let rest = s.length;

    while (rest > 0) {
        for (let i = 0; i < 26; i++) {
            if (hash[i] > 0) {
                results.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (hash[i] > 0) {
                results.push(String.fromCharCode(i + 97));
                hash[i]--;
                rest--;
            }
        }
    }

    return results.join('')
};