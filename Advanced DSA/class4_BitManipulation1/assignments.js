//Q1. Single Number
function singleNumber(A){
    let ans;
    let n = A.length;
    for(let i = 0; i < n; i++){
        ans = (ans ^ A[i]);
    }
    return ans;
}
//console.log(singleNumber([1, 2, 2, 3, 1]));

//Q2. Single Number II

function singleNumberII(A){
    let n = A.length;
    let ans;
    for(let b=0; b<32;b++){
        let countSetBit = 0;
        for(let i = 0; i < n; i++){
            if(checkIfSet(A[i], b)){
                countSetBit++;
            }
        }
        if(countSetBit % 3 !=0){
            ans =  ans | (1 << b);
        }
    }
    return ans;

}
function checkIfSet(num, bit){
    if((num & (1 << bit)) != 0){
        return true;
    }
        return false;
}
// console.log(1 << 1);
// console.log(checkIfSet(2, 1));
//console.log(singleNumberII([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));
console.log(singleNumberII([0, 0, 0, 1]));


function checkIfSetUsingRightShift(num, bit){
    if(((num >> bit) & 1) === 1){
        return true;
    }
        return false;
}

//Q3. Number of 1 Bits

function countNoOf1Bits(A){
    let count1s = 0;
    for(let b = 0; b < 32; b++){
        if(checkIfSet(A, b)){
            count1s++;
        }   
    }
    return count1s;
}
console.log(countNoOf1Bits(11));