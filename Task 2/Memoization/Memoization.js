/*Implement a function that for any given function F produces function G that caches its previous calling results.
Function F accept single explicit parameter.
Implicit parameters should not be taken into account.
Watch out for NaN, undefined and circular references.*/

function mul(a, b, c) {
    return a * b * c;
}
 
function memorization(fn) {
    let cache = {};
    console.log(cache);
    return (...args) => {
        let key = args.toString();
        if (key in cache) {
            return cache[key];
        }
        return cache[key] = fn(...args);
    };
}

const res = memorization(mul);
console.log(res(1, 2, 3));
console.log(res(1, 2, 3)); //из кэша 
