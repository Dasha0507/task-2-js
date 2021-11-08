/*Implementfunction currythat allows to do currying like:𝑓(𝑥,𝑦,𝑧)=𝑁,
𝑐𝑢𝑟𝑟𝑦(𝑓)=𝑥→(𝑦→(𝑧→𝑁))
Function f may accept any number of explicit parameters.
Implicit parameters are not subject to curry.
How is it differ from PartialApplication?*/
 
function sum(a, b, c) {
    return a + b + c;
}

function curry(func) { 
    function nest(N, args) {
        return (...xs) => {
            if (N - xs.length === 0) {
                return func(...args, ...xs);
            }
            return nest(N - xs.length, [...args, ...xs]);
        };
    }
    return nest(func.length, []);
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)(5)); // 8