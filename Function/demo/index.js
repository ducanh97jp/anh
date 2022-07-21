function sum(a, b) {
    return a + b;
}
let x=5;
let y = 8;
let result = sum(x, y);
console.log(result);
const sumArray = (array) => {
    let a = 0;
    for (let x of array) {
        a += x;
    }
    return a;
}
let arr = [1, 3, 8, 9, 6, 8];
let result1 = sumArray(arr);
console.log(result1);