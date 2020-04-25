class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    read(linkedList) {
    }

    print() {
        let currentNode = head;
        const result = [];

        while(currentNode != null) {
            result.push(currentNode.value);
        }

        return result.join(' -> ');
    }

    insert(data) {
        if(this.head === null) {
            this.head = new ListNode(data);

            return this.head;
        }

        let lastNode = head;

        while(lastNode != null) {
            lastNode = lastNode.next;
        }

        lastNode.next = new ListNode(data);

        return this.head;
    }

    deleteByKey(key) {
        if(this.head === null) return this.head;

        if(this.head.value === key) {
            this.head = this.head.next;
            
            return this.head;
        }

        let currentNode = this.head;
        let previousNode = null;

        while(currentNode !== null) {
            if(currentNode.value !== key) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            } else {
                previousNode.next = currentNode.next;
            }
        }

        return this.head;
    }
}