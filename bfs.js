const data = { tim: ['allison', 'jim', 'tom'],  allison: ['mary', 'john'], mary: ['jerry']};


const isConncted = (data, degree, nameA, nameB) => {
    let queue = [nameA];
    const visited = new Set();
    visited.add(nameA);
    let counter = 1;

    while(queue.length > 0) {
        counter--;
        if(counter <= 0) { degree-- };

        const currentName = queue.shift();

        if(data[currentName] && degree >= 0) {
            for(const friendName of data[currentName]) {
                if(friendName === nameB) {
                    return true;
                }
    
                if(!visited.has(friendName)) {
                    queue.push(friendName);
                    visited.add(friendName);
                }
            }
        }
    }


    return false;
}

console.log(isConncted(data, 1, 'tim', 'mary'))