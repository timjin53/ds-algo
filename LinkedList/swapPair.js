const { LinkedList } = require("./LinkedList");

const arr = ["1", "2", "3", "4", "5"];
const list = new LinkedList();
list.read(arr);

list.print();

// O(n)
const swapPairs = ({ head }) => {
   if(head === null || head.next === null) return head;

   let currentNode = head;
   const newHead = head.next;

   while(currentNode && currentNode.next) {
       const nextNode = currentNode.next;
       const nextNextNode = nextNode.next;

       nextNode.next = currentNode;
       currentNode.next = nextNextNode && nextNextNode.next ? nextNextNode.next : nextNextNode;

       currentNode = nextNextNode;
   }

   return newHead;
};

const newHead = swapPairs(list);
const newList = new LinkedList();

newList.head = newHead;

newList.print();
