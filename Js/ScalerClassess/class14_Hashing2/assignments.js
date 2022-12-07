//Q1. Longest Subarray Zero Sum
function findLongestSubArray(A){
    let pfSumArr = [];
    let map = new Map();
    pfSumArr[0] = A[0];

    for(let i = 1; i < A.length; i++){
        pfSumArr[i] = pfSumArr[i-1] + A[i];
    }
    let len = 0;
    for(let i = 0; i < pfSumArr.length; i++) {
        if(map.has(pfSumArr[i])) {
            len = Math.max(len, i - map.get(pfSumArr[i]));
        }else{
            map.set(pfSumArr[i], i);
        }
        if(pfSumArr[i] == 0){
            len = Math.max(len, i+1 );
        }
        
        console.log(map);
    }


    return len;
}
//console.log(findLongestSubArray([2, 2, 1, -3, 4, 3, 1, -2, -3, 2]));
console.log(findLongestSubArray([ -16, 16, 3 ]));

//Q2. Check Pair Sum
function checkPairSum(A, B){
    let set = new Set();
    for(let i = 0; i < A.length; i++){
        if(set.has(B - A[i])){
           return 1;
        }else{
            set.add(A[i]);
        }
        console.log(set);
    }
    return 0;
}
//console.log(checkPairSum([ 23, 52, 95, 29, 9, 47, 49, 55, 96, 4 ], 100));