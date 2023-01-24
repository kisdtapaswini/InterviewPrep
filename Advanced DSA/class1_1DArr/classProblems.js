//1. Given an array, find the max sum of contiguous elements in the array.
//Using Carry forward -  O(n^2)
function findMaxSum(A){
    let maxSum = A[0];
    let n = A.length;
    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n ; j++){
            sum += A[j];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
}
//console.log(findMaxSum([1, 2, 3, 4, -10]));

// Using prefix sum,  O(n^2)
function findMaxSumUsingPrefixSum(A){
    let n = A.length;
    let pSum = [];
    pSum[0] = A[0];
    for(let i = 1; i < n; i++){
        pSum[i] = pSum[i-1] + A[i];
    }
    let maxSum1 = A[0];
    let sum = 0;

    for(let i = 0; i < n; i++){
        for(let j = i; j < n ; j++){
            if(i === 0){
                sum = pSum[j];
            }else{
                sum = pSum[j] - pSum[i-1];
            }
            maxSum1 = Math.max(maxSum1, sum);
        }
    }
    return maxSum1;
}

//console.log(findMaxSumUsingPrefixSum([11, 2, -3, 1, -10]));

// Using sliding window

function findMaxSumUsingKadanesAlgo(A){
    let max = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    let startIdx = 0;
    let endIdx = 0;
    let res = {};
    for(let i = 0; i < A.length; i++){
        currSum = currSum + A[i];
        if(currSum > max){
            max = currSum;
            endIdx = i;
            res = {startIdx, endIdx};
        }
        if(currSum < 0){
            currSum = 0;
            startIdx = i+1;
        }
    }
    return res;
}


//console.log(findMaxSumUsingKadanesAlgo([1, 2, 3, 4, -10]));


//2. Given an array of size n, find the smallest positive number thatis missing(NOT present) in the array.
// Brute Force solution with O(n^2)
// Approach - 1

function findSmallestMissing(A){
    let n = A.length;
    for(let i = 1; i <= n; i++){
        let idx = -1;
        for(let j = 0; j < n; j++){
            if(A[j] === i){
                idx = j;
            }
        }
        if(idx === -1){
            return i;
        }
    }
    return n+1;
}
//console.log(findSmallestMissing([3, 2, -3, 6, 1, 4]));
//console.log(findSmallestMissing([1, 2, 3, 4, 5, 6]));

// Approach - 2, (with sorting) O(nlogn)
function findSmallestMissingUsingSorting(A){
    let n = A.length;
    A.sort((a, b)=> a-b); // it iverwrites the original array.
    for(let i = 0; i <= n; i++){
       if(A[i] > 0){
        if(A[i] === i){

        }
       }
    }
    return n+1;
}
//console.log(findSmallestMissingUsingSorting([7, 2, -3, 6, 1, 4]));
// // Approach - 3, (using HashMap) O(n) / space - O(n)

// // Approach - 4, (using array to stor) O(n) / space - O(n)
function findSmallestMissingUsingArr(A){
    let n = Math.max(A);
    let newArr =  new Array(7).fill(false);
 //  
    for(let i = 0; i <= A.length; i++){
        if(A[i] > 0 && A[i] <=  6){
            newArr[A[i]] = true;
        }
    }
    console.log(newArr);
    for(let i = 1; i < newArr.length; i++){
        if(!newArr[i]){
            return i;
        }
    }
    //return newArr;
}
//console.log(findSmallestMissingUsingArr([1,3,5,6]));

// // Approach - 5, (without using any extra storage) O(n) / space - O(1)
function findSmallestMissingUsingOpti(A){
    let n = Math.max(A);
    let newArr =  new Array(7).fill(false);
 //  
    for(let i = 0; i <= A.length; i++){
        if(A[i] > 0 && A[i] <=  6){
            newArr[A[i]] = true;
        }
    }
    console.log(newArr);
    for(let i = 1; i < newArr.length; i++){
        if(!newArr[i]){
            return i;
        }
    }
    //return newArr;
}
console.log(findSmallestMissingUsingOpti([1,3,5,6]));