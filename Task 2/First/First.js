/*Implement a function that returns the first element in array that satisfies given condition.*/

const arr = [5, -10, 90, 8, 96, 3, 0, 9, 0, 5, -6, 0, -83, -7, 93];

Array.prototype.find2 = function (callback, thisarg) {
    if (this == null) {
        throw new Error('Cant iterate over undefind or null');
    }

    let context = this; //this в context 
    let o = Object(this); //создаем объект данного прототипа
 
    if(arguments.length > 1) {
        context = thisarg;
    }
 
    if(typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }    
 
    let len = o.length;
    let result = [];
 
    for(let i = 0; i < len; i++) {
            if(callback.call(context, this[i], i, 0)) {
                return result = this[i];
        }
    }
}

let evenel = (item) => item % 2 == 0;
let oddel = (item) => item % 2 !==0;
let positive = (item) => item > 0;
let negative = (item) => item < 0;
let somecondition = (item) => item < -10;
 
console.log(arr.find2(evenel));
console.log(arr.find2(oddel));
console.log(arr.find2(positive));
console.log(arr.find2(negative));
console.log(arr.find2(somecondition));