//Q2. Min XOR value

function minXor(A){
    let n = A.length;
    A.sort((a, b) => a-b);
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < n; i++){
        ans = Math.min(A[i-1] ^ A[i])
    }
    return A;

}
//console.log(minXor([ 12, 4, 6, 2 ]));

//Q3. SUBARRAY OR
function subarryOr(A){
    let n = A.length;
    let totalNoOfSubArray = parseInt((n*(n+1))/2);
    let totalSum = 0;
    for(let i = 0; i < 31; i++){
        let bitArr = [];
        for(let n of A){
           bitArr.push(((n >> i) & 1));
        }
        let numberOf1bit = totalNoOfSubArray - nuOfZeroBits(bitArr);
        totalSum +=(numberOf1bit * (1 << i));
    }
    return totalSum;
}
function nuOfZeroBits(arr){
    let count = arr [0] === 0 ? 1 : 0;
    let totalCount = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 0){
                count++;
        }else{
            totalCount += parseInt((count * (count+1))/2);
            count = 0;
        }

    }
    totalCount += parseInt((count * (count+1))/2);
    return totalCount;

}
//console.log(subarryOr([1,2,3,4,5]));

//Q1. Strange Equality
// Brute force solution
function strangeEqu(A){
    let small = A;
    let large = 0;
    for(let i = A-1; i >=0; i--){
        if((A + i) == (A ^ i)){
            large = i;
            break;
        }
    }
    for(let i = A+1; i > A; i++){
        if((A + i) === (A ^ i)){
            small = i;
            break;
        }
    }
    return {small, large};

}
//console.log(strangeEqu(5));
console.log(strangeEqu1(5));

function strangeEqu1(A){
    let small = 0;
    let large = 0;
    let n = countBits(A);
    for(let i = 0; i < n; i++){
        if(!checkIfSet(A, i)){
            large |= (1<<i);
        }
    }
    small = (1 << n);
    return (large ^ small);
}
function checkIfSet(num, bitPos){
    if((num >> bitPos) & 1){
        return true;
    }
    return false;
}
function setBit(N, bitPos){
    return (N | (1<<bitPos));
}

function countBits(n){
    let count = 0;
    while(n !== 0){
        count++;
        n >>=1;
    }
    return count;
}

// count number of set bits
function countSetBits(n){
    let count = 0;
    while(n !== 0){
        count++;
        n = n & n-1;
    }
    return count;

}
//console.log(countBits(7));
