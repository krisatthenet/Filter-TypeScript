const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfStrings = ['hello', 'world'];

// Generic
function loggingIdentity<T>(arg: T[]) {
    return true;
}

console.log(loggingIdentity([7]));

function filter<T>(a:T[], predicate: (value:T) => boolean):T[] {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (predicate(a[i])) {
            result.push(a[i]); 
        }
    }
    return result;
}

console.log(filter(array, a => a % 2 === 0));
console.log(filter(arrayOfStrings, a => a === 'world'));
console.log(arrayOfStrings.filter(a => a === 'world'));