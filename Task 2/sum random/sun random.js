/*Get the sum of 10random numbers using functions implemented for 
previous problems.*/

function linearFold(arr, callback, initValue) { 
    const countCallbackArgs = 4; 
    if (callback.length > countCallbackArgs) { 
        throw new Error('Function callback has to accept not more 4 parameters');
    }
    let prev = initValue; //присваивание первого аргумента объекта, для первого вызова колбэка
    for (let i = 0; i < arr.length; i++) {
        prev = callback(prev, arr[i], i, arr);
    }
    return prev; 
}
 
function sumPrevWithCurr(prev, curr, index, arr) {
    return prev+curr;
}
 
function getOfSumRandom () {
    let arr = [];
    for(let i = 0; i < 10; i++) {
        let item = Math.round(Math.random() * 100);
        arr.push(item);
    }
    console.log("Массив, заполненный рандомными числами" + " :> " + arr)
    let result = linearFold(arr, sumPrevWithCurr, 0);
    console.log("Сумма всех элементов массива" + " :> " + result);
}
 
getOfSumRandom()
 