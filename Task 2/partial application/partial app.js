/*Implement function F that allows to do partial function application in a form of:
𝐺(𝑥,𝑦,𝑧...)=𝑁
𝐹(𝑥,𝐺(𝑥,𝑦,𝑧...))→𝐻(𝑦,𝑧...)=𝑁 
F should accept any number of parameters to apply.
G may accept any number of parameters. Is there any JavaScriptbuilt-inalternative?*/


function sum(a, b, c) {
    return a + b + c;
}
 
function partialApplication(func, ...args) {
    return (...rest) => {
        return func(...args.concat(rest));
    }
 
}
 
const f11 = partialApplication(sum, 1);
const f12 = partialApplication(f11, 2);
const y1 = f12(3);
console.log(y1);
 
const f21 = partialApplication(sum, 1, 2);
const y2 = f21(3);
console.log(y2);
 
const f31 = partialApplication(sum, 1);
const y3 = f31(2, 3);
console.log(y3);