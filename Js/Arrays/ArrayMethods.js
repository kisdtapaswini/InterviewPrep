let numbers = [1, 2, 3];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

let sum = numbers.reduce((prevVal, currVal)=>{
    return prevVal + currVal;
})

console.log(sum);