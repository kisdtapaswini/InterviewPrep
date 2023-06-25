//Q1. Write a recursive function that given an input n sums all non negetive integers upto n

function sum(A, size) {
    if(size === 0){
        return 0;
    }
    return A[size-1] + sum(A, size-2)

}
//console.log(sum([1, 4, 6, 7, 10], 5));

function longestSubArraySumZero(A){
    let pfSum = [];
    pfSum[0] = A[0];
    for(let i = 1; i < A.length; i++){
        pfSum[i] = pfSum[i-1] + A[i];
    }
    let map = new Map();
    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < pfSum.length; i++){
        if(map.has(pfSum[i])){
            ans = Math.max(ans, (i - map.get(pfSum[i])));
        }else{
            map.set(pfSum[i], i);
        }
    }
    return ans;
}

console.log(longestSubArraySumZero([2,2,1,-3,4,3,1,-5,6,-2,1]));