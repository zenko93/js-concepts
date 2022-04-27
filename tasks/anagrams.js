function allAnagrams(array) {
    // const base = array.shift();
    // const temp = [];
    //
    // for (let i = 0; i < array.length; i++) {
    //     if (base.length !== array[i].length) {
    //         return false
    //     }
    //
    //     for (let j = 0; j < array[i].length; j++) {
    //          temp.push(base.includes(array[i][j]))
    //     }
    // }
    //
    // return !temp.includes(false)

    const sorted = array.map((item) => item.split('').sort().join(''));
    const standard = sorted.shift();

    return sorted.every((item) => standard === item);
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false