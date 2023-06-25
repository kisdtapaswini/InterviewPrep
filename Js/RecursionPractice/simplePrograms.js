//Q1. Write a recursive function that given an input n sums all non negetive integers upto n

function sum(A, size) {
    if(size === 0){
        return 0;
    }
    return A[size-1] + sum(A, size-2)

}
<<<<<<< HEAD
console.log(sumDiff([15,-4,56,10,-23], [14,-9,56,14,-23]));

//How to implement recursion from a iterative method 

function sensDiff(sense1, sense2, size){
    let diff = 0;
    for(let i = 0; i< size; i++){
      diff += Math.abs(sense1[i] - sense2[i])
    }
    return diff;
  }
  
  function findDiff(sensData1, sensData2, size){
    if(size === 0){
      return 0;
    }
    let lastElemDiff = Math.abs(sensData1[size-1] - sensData2[size-1]);
    let ans = lastElemDiff + findDiff(sensData1, sensData2, size-1)
      return ans;
  }
  console.log(findDiff([15, -4, 56, 10, -23],[14, -9, 56, 14, -20], 5));
=======
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
>>>>>>> f54133556f736ac8b35ec251edd5fa4123565af3
