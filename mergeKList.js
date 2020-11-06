
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    return mergeKListsHelper(lists, 0, lists.length - 1);
};

const mergeKListsHelper = (lists, start, end) => {
    console.log(start, end)
    if(start === end) {
        return lists[start];
    } else if(end - 1 === start) {
        return mergeTwoList(lists[start], lists[end]);
    } else {
        const mid = Math.floor((start + end)/2);
        const leftPart = mergeKListsHelper(lists, start, mid);
        const rightPart = mergeKListsHelper(lists, mid+1, end);
        return mergeTwoList(leftPart, rightPart);
    }
}

const mergeTwoList = (l1, l2) => {
    console.log(l1, l2)
    const result = new ListNode('dummy');
    let tail = result;
    
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            const newNode = new ListNode(l1.val);
            tail.next = newNode;
            tail = newNode;
            l1 = l1.next;
        } else {
           const newNode = new ListNode(l2.val);
            tail.next = newNode;
            tail = newNode;
            l2 = l2.next;
        }
    }
    
    if(l1 !== null) {
        while(l1 !== null) {
            const newNode = new ListNode(l1.val);
            tail.next = newNode;
            tail = newNode;
            l1 = l1.next;
        }
    }
    
    
    if(l2 !== null) {
        while(l2 !== null) {
            const newNode = new ListNode(l2.val);
            tail.next = newNode;
            tail = newNode;
            l2 = l2.next;
        }
    }
    
    return result.next;
}
