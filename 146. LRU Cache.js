/**
 */

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = {currentFilled : 0};

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.storage[key]){
    return this.storage[key];
  } else {
    return -1
  }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    
};

let myCache = new LRUCache(3);

console.log(myCache)
console.log(myCache.get(4))
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */