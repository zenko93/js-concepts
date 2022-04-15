function flatten(array) {
    return array.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
