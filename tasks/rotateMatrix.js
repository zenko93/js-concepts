const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate90(source) {
    let arr1 = []
    let arr2 = []
    let arr3 = []

    source.forEach(arr => {
        arr1.push(arr.shift());
        arr3.push(arr.pop());
        arr2.push(...arr);
    });

    return [arr1.reverse(), arr2.reverse(), arr3.reverse()]
}

function rotate180(source) {
    // return rotate90(rotate90(source))
    return source.reverse().map(arr => arr.reverse())
}

function print(arr) {
    arr.forEach(i => console.log(i))
}

print(rotate180(matrix))