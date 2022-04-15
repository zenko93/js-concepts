function highestFrequency(array) {

    // const countedSymbols = array.reduce((acc, curr) => (acc[curr] = acc[curr] + 1 || 1, acc), {});
    // return Object.keys(countedSymbols).reduce((a, b) => countedSymbols[a] >= countedSymbols[b] ? a : b)

    // const map = {};
    // let maxFrequency = 0;
    // let maxFrequencyStr = array[0];
    //
    // array.forEach(item => {
    //     map[item] ? map[item]++ : map[item] = 1;
    //
    //     if ( map[item] > maxFrequency) {
    //         maxFrequency = map[item];
    //         maxFrequencyStr = item;
    //     }
    // })
    //
    // return maxFrequencyStr

    let maxFrequency = 0;
    let maxFrequencyStr = array[0];

    array.reduce((acc, curr) => {
        acc[curr] = acc[curr] + 1 || 1

        if ( acc[curr] > maxFrequency) {
            maxFrequency = acc[curr];
            maxFrequencyStr = curr;
        }

        return acc;
    }, {});

    return maxFrequencyStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi