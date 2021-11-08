/*Implement a function that creates new array with the results of calling a provided function on every element in this array.
Does ES5 has built-in alternative?*/

let arr = [5, 8, 96, 3, 5];
Array.prototype.map2 = function (callback, thisarg) {
    if (this == null) {
        throw new Error('Cant iterate over undefind or null');
    }

    let context = this;
    let o = Object(this);

    if(arguments.length > 1) {
        context = thisarg;
    }

    if(typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }    

    let len = o.length;
    let newArr = [];

    for(let i = 0; i < len; i++) {
        if(i in o) {
            newArr[i] = callback.call(context, this[i], i, 0);
            
        }
    }

    return newArr;
}

let increase = (item) => item + 1;
let mul = (item) => item * 2;

console.log(arr.map2(increase));