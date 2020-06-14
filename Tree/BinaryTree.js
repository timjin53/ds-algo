class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Decodes encoded data to binary tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserializeBinaryTree = data => {
    const treeNodeArray = data.split(",");

    if(treeNodeArray.length === 0) return null;

    const root = new TreeNode(treeNodeArray.shift());

    let nodeQueue = [root];
    let parentIndex = 0;
    let isLeftChild = true;

    while(treeNodeArray.length !== 0) {
        const nodeToAdd = treeNodeArray.shift();
        const parentNode = nodeQueue[parentIndex];

        if(nodeToAdd !== '#') {
            const treeNodeToAdd = new TreeNode(nodeToAdd);

            if(isLeftChild) {
                parentNode.left = treeNodeToAdd;
            } else {
                parentNode.right = treeNodeToAdd;
            }

            nodeQueue.push(treeNodeToAdd);
        }

        if(!isLeftChild) parentIndex++;
        isLeftChild = !isLeftChild;
    }

    return root;
}

//       1
//     2   3
//        4  
//       5  6
const binrayTreeString = "1,2,3,#,#,4,#,5,6";

const testRoot = deserializeBinaryTree(binrayTreeString);

// console.log(testRoot);
// console.log(testRoot.left);
// console.log(testRoot.right);
// console.log(testRoot.right.left);

/**
 * Encodes binary tree into a string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serializeBinaryTree = root => {
    if (root === null) return '';

    const treeNodeQueue = [root];
    const resultArray = [root.value];

    while(treeNodeQueue.length > 0) {
        const currentNode = treeNodeQueue.shift();
        const left = currentNode.left;
        const right = currentNode.right;

        if(currentNode.left === null) {
            resultArray.push("#");
        } else {
            resultArray.push(left.value);
            treeNodeQueue.push(left);
        }

        if(currentNode.right === null) {
            resultArray.push("#");
        } else {
            resultArray.push(right.value);
            treeNodeQueue.push(right);
        }
    }

    return resultArray.join(",");
}

console.log(serializeBinaryTree(testRoot));
