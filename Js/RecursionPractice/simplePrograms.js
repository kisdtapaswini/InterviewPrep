//Q1. Write a recursive function that given an input n sums all non negetive integers upto n

function sum(A, B) {
    

}
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