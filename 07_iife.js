// Immediate Invoked Function Expression
let result = [];
// for(let i = 0; i < 5; i++) {
//     result.push(function () {
//         console.log(i)
//     })
// }

for(var i = 0; i < 5; i++) {
    (function () {
        var j = i;
        result.push(function () {
            console.log(j)
        })
    })()
}

result[2]();