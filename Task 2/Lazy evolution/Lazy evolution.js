/*Implement a function that takes list of parameters and makes any given function lazy.*/

function sum(a, b, c) {
    return a + b + c;
}
 
function Lazy(fn, ...args) {
    return fn(...args)
}
 
function begin() {
    let isneed = confirm("Выполнить вычисления?");
 
    if(isneed) {
        alert(Lazy(sum, 1, 2, 3));
    } else {
        alert("Вычисления отложены");
    }
}
 
begin();
 
// function lazyEvaluation(fn, time) {
//     return function sett (...args) {
//         setTimeout(() => {
//             fn(...args)
//         }, time);
//     }
// }















































// function lazyEvaluation(func) {
//     return (...args) => {
//         setTimeout(() => {
//             func(...args)
//         }, 5000);
//     }
// }

// console.log(lazyEvaluation(sum));

// // let num = 5000;
// let lazy = lazyEvaluation((1), (2), (3), 5000);
// console.log(lazy);