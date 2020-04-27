class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    read(list) {
        constructor();

        if(list.length === 0) {
            return this.head;
        }

        this.head = new ListNode(list[0]);

        let currentNode = this.head;
        let nextNode = null;

        for(let i=0; i < list.length; i++) {
            if(i + 1 < list.length) {
                nextNode = new ListNode(list[i+1]);
            }
            currentNode.next = nextNode;

            currentNode = currentNode.next;
            nextNode = null;
        }

        return this;
    }

    print() {
        let currentNode = this.head;
        const result = [];

        while(currentNode !== null) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        const resultString =  result.join(' -> ');
        console.log(resultString);
        return resultString;
    }

    insert(data) {
        if(this.head === null) {
            this.head = new ListNode(data);

            return this;
        }

        let lastNode = this.head;

        while(lastNode.next != null) {
            lastNode = lastNode.next;
        }

        lastNode.next = new ListNode(data);

        return this;
    }

    deleteByKey(key) {
        if(this.head === null) return this;

        if(this.head.value === key) {
            this.head = this.head.next;
            
            return this;
        }

        let currentNode = this.head;
        let previousNode = null;

        while(currentNode !== null) {
            if(currentNode.value !== key) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            } else {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
            }
        }

        return this;
    }
}

exports.LinkedList = LinkedList;
