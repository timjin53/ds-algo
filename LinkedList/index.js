const { LinkedList } = require('./LinkedList');

const list = [1, 2, 3];

const linkedList = new LinkedList();

linkedList.read(list);
linkedList.print();

linkedList.insert(4).insert(5);
linkedList.print();

linkedList.deleteByKey(3);
linkedList.print();

linkedList.deleteByKey(1);
linkedList.print();

linkedList.deleteByKey(5);
linkedList.print();
