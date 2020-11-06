/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map();
    this.dummyHead = new ListNode('dummy', 'dummy');
    this.tail = this.dummyHead;
    this.moveNextToTail = function(prev) {
        const current = prev.next;

        if(current === this.tail) {
            return;            
        }

        prev.next = current.next;
        this.map.set(current.next.key, prev);
        this.tail.next = current;
        current.next = null;
        this.map.set(current.key, this.tail);
        this.tail = current;
    }
};

class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        const prev = this.map.get(key);
        const current = prev.next;
        this.moveNextToTail(prev);

        return current.val;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        this.map.get(key).next.val = value;
        this.moveNextToTail(this.map.get(key));
        return;
    }

    const current = new ListNode(key, value);

    if(this.size < this.capacity) {
        this.size += 1;
    } else {
        const head = this.dummyHead.next;
        this.map.set(head.next.key, this.dummyHead);
        this.map.delete(head.key);
        this.dummyHead.next = head.next;
    }
    
    // append new node to tail
    this.map.set(key, this.tail);
    this.tail.next = current;
    this.tail = current;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
console.log('==============>')
const lRUCache = new LRUCache(2);
lRUCache.put(2,1)
lRUCache.put(1,1)
lRUCache.put(2,3)
lRUCache.put(4,1)
console.log(lRUCache.get(1))


