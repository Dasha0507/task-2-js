/*Implement linear fold function that works on arrays:
F(array, callback[, initialValue]),
callback:Function to execute on each value in the array, taking four arguments:
previousValue: The value previously returned in the last invocation of the callback,orinitialValue, if supplied.
currentValue: The current element being processed in the array.
index: The index of the current element being processed in the array.
array: The arrayfoldwas called upon.
initialValue: Object to use as the first argument to the first call of the callback.
Does ES5 has built-in alternative?*/
 
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

let result = linearFold([11, 2, 3, 4], sumPrevWithCurr, 0)
alert (result);