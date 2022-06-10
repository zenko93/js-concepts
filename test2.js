// let arr = [1, 2, 3, 4, 5];
//
// function clone(arr, times) {
//     let result = [];
//
//     for (let i = 0; i < times; i++) {
//         result.push(...arr)
//     }
//
//     return result;
// }
//
// console.log(clone(arr, 5))

//
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// setTimeout(() => console.log(3), 0);
// Promise.resolve(true).then(() => console.log(4));
// console.log(5);

// console.log(typeof null);


// function Counter (num) {
//     this.num = num;
//
//     // this.sum = () => {
//     //     return ++this.num;
//     // }
// }
//
// function Sum (num) {
//     Counter.call(this, num)
//
//     this.counter = () => {
//         return ++num;
//     }
// }
//
//
// Sum.prototype.double = function() {
//     return this.num * 2;
// }
//
// let counter1 = new Sum(3)
// console.log(counter1.counter())
// console.log(counter1.counter())
//
// let counter2 = new Sum(1)
// console.log(counter2.counter())
// console.log(counter2.counter())
//
// let counter3 = new Sum(6)
// console.log(counter3.double())

// const user = {
//     fullName: 'Иван Человеков'
// }
//
// function getName() {
//     console.log(this.fullName);
// }

// function myBind(context, ...rest) {
//     let myThis = this;
//
//     return function(...args) {
//         const uuid = Date.now().toString();
//         context[uuid] = myThis;
//         const res = context[uuid](...rest, ...args);
//         delete context[uuid];
//         return res;
//     }
// }
//
// Function.prototype.myBind = function (currentContext = {}, ...arg) {
//     currentContext.fn = this;
//
//     return function (...rest) {
//         return currentContext.fn(...arg, ...rest);
//     };
// };
//
// Function.prototype.myBind = myBind
//
// getName.myBind(user) ()

// Function.prototype.myBind2 = function (context, ...args) {
//     let func = this;
    // if (typeof this !== 'function') {
    //     throw new Error(this + "cannot be bound as it's not callable");
    // }
//
//     return function (...rest) {
//         const uniqId = new Date().getDate().toString();
//
//         context[uniqId] = func;
//         const result = context[uniqId](...args, ...rest);
//         delete context[uniqId];
//
//         return result;
//     }
// }
//
// getName.myBind2(user) ()
//
// console.log(user)

// Function.prototype.myApply = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error(this + "it's not callable");
//     }
//     if (!Array.isArray(args)) {
//         throw new TypeError('CreateListFromArrayLike called on non-object')
//     }
//
//     const uniqId = new Date().getDate().toString();
//     context[uniqId] = this;
//     const result = context[uniqId](...args);
//     delete context[uniqId];
//
//     return result;
// }


// getName.myApply(user)
// console.log(user)

// var a = 5;
//
// function f() {
//     console.log(a)
//     if (a) {
//         console.log(a);
//         var a = 10;
//     }
// }
//
// f();

// let inc = function counter() {
//     let num = 0;
//
//     return function () {
//         return console.log(num += 1);
//     }
// }()
//
// inc() // 1
// inc() // 2

// const obj = {
//     a: 42,
//     say: function () {
//         setTimeout(function() {
//            console.log(this.a)
//         }.bind(this), 1000)
//     }
// }
//
// obj.say()

// const ex = (value, sum) => console.log(sum + value);
// const fx = ex.bind(null, 10);
//
// ex(12, 7) // 19
// fx(7, 12) // 17

// let words = ['grapefruit', 'orange', 'banana', 'banana', 'grapefruit', 'banana'];
//
// let wordsMap = words.reduce((pre,curr) => (pre[curr] = pre[curr] + 1 || 1, pre) , {})
// let result = Object.keys(wordsMap).sort((a, b) => wordsMap[b] - wordsMap[a])
// console.log(result)

function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function calculate(func) {

    return function (a) {

        return function (b) {
            return func(a, b)
        }
    }
}

console.log(calculate(sum)(3)(2))
console.log(calculate(mul)(3)(2))