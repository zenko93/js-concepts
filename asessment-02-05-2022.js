// Javascript
// Typescript vs Javascript
// interface vs type,
// Generics  -

// Javascript
// - multiparadigm (OOP, FP)
// - Functional Paradigm principles
// - pure function / impure function
// - function is first class object/citizen,
// - currying (?) - partial application since we operating with shared state
// -

// EventLoop
// main thread - execute javascript, rendering
// callstack - store scheduled function calls, order of execuction (stack)
// callback/task queue (microtask/macrotask) -
// browser api (delegate) - timers, http requests..
// Reactor pattern / sync demultiplexer

// setTimeout(() => {
//   console.log(1)
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log(2)
//   });

// queueMicrotask(() => {
//   console.log("Queue microtask");
// });

// function getData() {
//   if (data.cache) {
//     return data.cache;
//   } else {
//     return fetch(apiUrl)
//       .then(result => {
//         data.cache = result;
//         return result;
//       })
//   }
// }

// Vue
// Component A
// {
//   data: () => {
//     return {
//       foo: "bar"
//     }
//   },
// }

// // Component B
// {
//   data: {
//     foo: "bar"
//   }
// }

// Vuex
// state - centralized store for data
// mutations - centralized way to change/mutate date
// actions - action handler (function) => mutation

// CQRS
// EventSourcing (GIT)


const initialData = [1,2,3,4];
const resultWithArrays = initialData
    .filter(value => value % 2 !== 0) // [1, 2]
    .map(value => value * 2)          // [2, 6]

const resultWithReducer = initialData.reduce((result, value) => {
    if (value % 2 !== 0) {       // filter passed
        const newValue = value * 2 // do value change (mapping for single value)
        result.push(newValue);
    }

    return result;
}, []);

const FILTER_INCORRECT = Symbol("INCORRECT_FILTER");

const myFilterForTransducer = predicate => valueFromTransducer => predicate(valueFromTransducer) ? valueFromTransducer : FILTER_INCORRECT;
const myMapForTransducer = predicate => valueFromTransducer => predicate(valueFromTransducer);


// Loop Fusion
const transducer = (operators, values) => {
    const result = [];

    values.forEach(value => {
        let allOperationsResult = null;
        operators.forEach(operator => {
            if (allOperationsResult === FILTER_INCORRECT) {
                return;
            }

            allOperationsResult = operator(value);
        });

        if (allOperationsResult !== FILTER_INCORRECT) {
            result.push(allOperationsResult);
        }
    });

    return result;
}

const resultFromTransducer = transducer([
    myFilterForTransducer(value => value % 2 !== 0),
    myMapForTransducer(value => value * 2),
], initialData);


console.log(resultWithArrays, resultWithReducer, resultFromTransducer);