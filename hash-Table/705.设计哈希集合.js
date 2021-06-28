/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

class MyHashSet {
  constructor() {
    this.data = {};
  }
  add(value) {
    if (!this.data[value]) this.data[value] = true;
  }
  contains(value) {
    return !!this.data[value];
  }
  remove(value) {
    if (this.data[value]) delete this.data[value];
  }
}
