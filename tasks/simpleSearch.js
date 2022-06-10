function search(array, target) {
    // return array.indexOf(target)
    let start = 0;
    let end = array.length
    const middle = (arr) => Math.floor(arr.length / 2)

    while (array.length) {
        let num = (arr) => arr[middle(arr)];

        if (num(array) === target) {
            return num;
        }
        else {
            if (target < num(array)) {
                end = num
                let left = array.slice(start, end)
            }
            else {
                let right = array.slice(num, num)
            }
        }
    }

}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1