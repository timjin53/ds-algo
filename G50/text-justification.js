// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left justified and no extra space is inserted between words.
// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// const words = ["This", "is", "an", "example", "of", "text", "justification."];
// const maxWidth = 16;

// [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
//  ]

const words = ["What","must","be","acknowledgment","shall","be"]
const maxWidth = 16

// [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
// ]

// const words = ["Science","is","what","we","understand","well","enough","to","explain",
//          "to","a","computer.","Art","is","everything","else","we","do"]
// const maxWidth = 20

// [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
//   ]


const textJustification = (words, maxWidth) => {
    const result = [];

    let currentLine = [];
    let capacity = maxWidth;

    for(const word of words) {
        if(word.length <= capacity) {
            currentLine.push(word);
            capacity = capacity - word.length - 1;
        } else {
            result.push(currentLine);
            currentLine = [word];
            capacity = maxWidth - word.length - 1;
        }
    }

    if(currentLine.length !== 0) result.push(currentLine);

    return result.map((line, index) => {
        if(index === result.length - 1) {
            return line.join(' ').padEnd(maxWidth, ' ')
        } else {
            return padSpaces(line, maxWidth)
        }
    });
}

const padSpaces = (currentLine, maxWidth) => {
    if(currentLine.length === 0) return '';
    if(currentLine.length === 1) return currentLine[0].padEnd(maxWidth, ' ');

    let totalSpaces = maxWidth - currentLine.map(x=> x.length).reduce((acc, curr) => acc + curr);
    const numOfSpaceGroups = currentLine.length - 1;
    const commonSpaces = Math.floor(totalSpaces/numOfSpaceGroups);
    let extraSpaces = totalSpaces%numOfSpaceGroups;

    for(let i=0; i<currentLine.length - 1; i++) {
        currentLine[i] = currentLine[i].padEnd(currentLine[i].length + commonSpaces, ' ')
    }

    for(let i=0; i<extraSpaces; i++) {
        currentLine[i] += ' ';
    }
    
    return currentLine.join('');
}

console.log(textJustification(words, maxWidth));
