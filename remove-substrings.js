const minLength = function (s, dict) {
    // write your code here
    let minLength = s.length;
    const visited = new Set();
    const queue = [s];
    visited.add(s);
    
    while(queue.length > 0) {
        const currentString = queue.shift();
        
        for(const target of dict) {
            const remainders = getRemainders(currentString, target, visited);
            
            if(remainders.length > 0) {
                for(const remainder of remainders) {
                    queue.push(remainder);
                    if(remainder.length < minLength) {
                        minLength = remainder.length;
                    }
                }
            }
        }
    }
    
    return minLength;
}

const getRemainders = (str, target, visited) => {
    const result = [];
    let startIndex = 0;

    while(startIndex !== -1) {
        const targetIndex = str.indexOf(target, startIndex);

        if(targetIndex !== -1) {
            startIndex = targetIndex + target.length;
            const newString = str.substring(0, targetIndex) + str.substring(startIndex);
       
            if (!visited.has(newString)) {
                result.push(newString);
                visited.add(newString)
            }
        } else {
            startIndex = -1;
        }
    }
    
    
    return result;
}


// const s = "abcabd"
// const dict = ["ab","abcd"]

const s = "abababababababababababaabababababababababababab"
const dict = ["ab"]

minLength(s, dict);