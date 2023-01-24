// Q3. Divide Integers
function divideInt(A, B){
    let quotient = 0;
    let n = A;
    let m = B;
    let MAX = 2147483647, MIN = -2147483648;
    let sign = (n < 0 && m >= 0) || (n >= 0 && m < 0) ? -1 : 1;
    n = Math.abs(A);
    m = Math.abs(B);
    for(let i= 5; i >=0; i--){
        let powerVal = (m << i);
        while(powerVal <= n){
            quotient += 1<<i;
            n = n - powerVal;
        }
    }
        // assign back the sign
        if (sign < 0){
            quotient = -quotient;
        }
        // check for overflow and return
        return quotient >= MAX || quotient < MIN ? MAX : quotient;}
//console.log(divideInt(43, 8));
//console.log(divideInt(-1, 1));

//Q2. Different Bits Sum Pairwise (Brute force)
function differentBits(A){
    let count = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A.length; j++){
            count += checkBitCount(A[i],A[j]);

        }
    }
    return count;
}
function checkBitCount(elem1, elem2){
    let count = 0;
    for(let i = 0; i <32; i++){
        let val1 = checkIfSet(elem1, i);
        let val2 = checkIfSet(elem2, i);
        if(val1 != val2){
            count++;
        }
    }
    return count;
}
function checkIfSet(num, bit){
    if((num & (1 << bit)) > 0){
        return 1;
    }
        return 0;
}
//console.log(differentBits([1, 3, 5]));
//console.log(checkBitCount(7, 3));
//console.log(differentBits([2, 3]));

//Q2. Different Bits Sum Pairwise Opti

function differentBits1(A){
    let result = 0;
    let n = A.length;
    for(let i = 0; i < 31; i++){
         let totalNoOfSetBits = 0
         for(let j = 0; j < n; j++){
            if(checkIfSet(A[j], i)){
                totalNoOfSetBits++;
            }
         }
         result += (totalNoOfSetBits * (n-totalNoOfSetBits))*2;
    }
    return result;

}
console.log(differentBits1([1,3,5]));