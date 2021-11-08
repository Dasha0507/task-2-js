/*Given array of numbers,find average of even ones using functions implemented for previous problems.
Example: [1,23,2,6,12, 0] -> (2 + 6 + 12 + 0) / 4 = 5*/

let arr = [0, 6, 4, 18, 79, 32, 46, 57, 77];

function linearFold(arr, callback, initValue) { 
    const countCallbackArgs = 4; 
    if (callback.length > countCallbackArgs) { 
        throw new Error('Function callback has to accept not more 4 parameters');
    }
    let prev = initValue; 
    for (let i = 0; i < arr.length; i++) {
        prev = callback(prev, arr[i], i, arr);
    }
    return prev; 
}
 
function sumPrevWithCurr(prev, curr, index, arr) {
    return prev+curr;
}

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

const AverageOfEvenNum = () => {
    let even = arr.filter2(evenel);
    let len = even.length;
    let reduceRes = linearFold(even, sumPrevWithCurr, 0);
    let average = reduceRes / len;
    console.log(average);
    return average;
}

AverageOfEvenNum();