class TrieNode {
    constructor(letter) {
        this.letter = letter;
        this.links = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode("");
    }

    print() {
        let queue = [ this.root ];

        while(queue.length > 0) {
            let levelLength = queue.length;
            console.log('----------');

            while(levelLength > 0) {
                const currentNode = queue.pop();
                console.log(currentNode);

                for(const link of currentNode.links.values()) {
                    queue.push(link);
                }
 
                levelLength--;
            }
        }
    }

    insert(word) {
        let currentNode = this.root;

        for(let i=0; i<word.length; i++) {
            const currentChar = word.charAt(i);

            if(currentNode.links.has(currentChar)) {
                currentNode = currentNode.links.get(currentChar);
            } else {
                const newNode = new TrieNode(currentChar);
                currentNode.links.set(currentChar, newNode);
                currentNode = newNode;
            }

            if (i === word.length - 1) {
                currentNode.isWord = true;
            }
        }
    }

    search(word) {
        if(!word) return true;

        let currentNode = this.root;

        for(const currentChar of word) {
            if(currentNode.links.has(currentChar)) {
                currentNode = currentNode.links.get(currentChar);
            } else {
                return false;
            }
        }

        return currentNode.isWord;
    }

    startsWith(wordPrefix) {
        if(!wordPrefix) return true;

        let currentNode = this.root;

        for(const currentChar of wordPrefix) {
            if(currentNode.links.has(currentChar)) {
                currentNode = currentNode.links.get(currentChar);
            } else {
                return false;
            }
        }

        return true;
    }
}

const trie = new Trie();

trie.insert('haha');
trie.insert('habe');

// console.log(trie.search('haha'));
// console.log(trie.search('hah'));
// console.log(trie.search('shit'));
// console.log(trie.search('hahahaha'));
// console.log(trie.search('habe'));

console.log(trie.startsWith('haha'));
console.log(trie.startsWith('hah'));
console.log(trie.startsWith('shit'));
console.log(trie.startsWith('hahahaha'));
console.log(trie.startsWith('habe'));
