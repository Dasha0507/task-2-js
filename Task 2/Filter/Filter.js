// /*Implement a function that filters array based on callback result.
// Does ES5 has built-in alternative?*/

const arr = [5, -10, 90, 8, 96, 3, 0, 9, 0, 5, -6, 0, -83, -7, 93];

Array.prototype.filter2 = function (callback, thisarg) {
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
    let result = [];
 
    for(let i = 0; i< len; i++){
        if(i in o) {
            if(callback.call(context, this[i], i, 0)) {
                result.push(this[i]);
            }
        }
    }
    // console.log(result);
    return result;
}

let evenel = (item) => item % 2 == 0;
let oddel = (item) => item % 2 !==0;
let positive = (item) => item > 0;
let negative = (item) => item < 0;
let zero = (item) => item == 0;
 
console.log(arr.filter2(evenel));
let ev = arr.filter2(evenel);
console.log(ev);
console.log(arr.filter2(oddel));
console.log(arr.filter2(positive));
console.log(arr.filter2(negative));
console.log(arr.filter2(zero));