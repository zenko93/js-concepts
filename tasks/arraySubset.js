function arraySubset(source, subset) {
    // const result = [];
    // const duplicate = subset.slice(0);
    //
    // for (let i = 0; i < source.length; i++) {
    //     let curr = source[i];
    //
    //     for (let j = 0; j < subset.length; j++) {
    //         if (curr === subset[j]) {
    //             subset.splice(j, 1);
    //             result.push(true);
    //         }
    //     }
    // }
    //
    // return result.length === duplicate.length;

    if (source.length < subset.length) {
        return false;
    }

    for (let i = 0; i < subset.length; i++) {
        let index = source.indexOf(subset[i]);

        if (index === -1) {
            return false;
        }

        delete source[index];
    }

    return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 3, 1], [1, 3, 2])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 1, 1, 3, 3], [1, 3, 3])) // -> true
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false