//Q1. A, B and Modulo
// Brute Force
function modulo(A, B){
    let ans = 0;

    for(let i =1; i< Math.max(A, B); i++){
        if(A % i === B % i){
            ans = i;
        }
    }
    return ans;
}
//console.log(modulo(5, 10));

//Q2. Mod Sum
function findModSum(A) {
   let sum = 0;
   let arr = new Array(1000).fill(0);
   let modVal = Number.parseFloat(10).toExponential(9) + 7;
    for(let n of A){
        arr[n] = arr[n]+1;
    }
    for(let i = 1; i < 1000; i++){
        for(let j = 1; j < 1000; j++){
            let val = i % j;
            let temp = val * arr[i] * arr[j]
            sum = (sum % modVal + temp % modVal) % modVal;
        }
    }
    return sum;
}
console.log(findModSum([1, 2, 3]));