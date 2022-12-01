/**
 * Equilibrium Index
 * Given N array elements, count no.of equilibrium idx. An idx i  is known as equilibrium idx if
 *      sum of all elems before the i idx = sum of all elems after the i idx(sum [0, i-1] = sum [i+1, n -1]) 
 * arr[7 ]= [-7, 1, 5, 2, -4, 3, 0]
 * leftSum = [0, -7 , -6, -1, 1, -3, 0] 
 * rightSum = [7, 6, 1, -1, 3, 0, 0]
 * Ans = 2 (For index 3 and index 6)
 */
// 1. Brute force idea - check for every index if the leftSum == rightSum, increase the count
// Time complexity = O(n^2)
// Space complexity = O(1)

function equillibriumIndex(arr){
    for(let i =0; i < arr.length; i++){
        let Lsum = 0;
        let Rsum = 0;
        let count = 0;
        for(let j = i-1; j >=0; j--){
            Lsum += arr[j];
        }
        for(let j = i+1; j < arr.length; j++){
            Rsum += arr[j];
        }
        if(Lsum === Rsum){
            count++;
        }
    }

    return count;
}
//console.log(equillibriumIndex([-7, 1, 5, 2, -4, 3, 0]));

/**
 * Optimised Solution
 * LSum = pfSum[i-1]
 * RSum = pfSum[n-1]-pfSum[i]
 * Corner case:
 *  if i ===0; then we can't find pfSump[-1] so in that case lSum should not be updated it should remain as zero.
 *  
 * No of iteration = 2n
 * Time complexity = O(n)
 * Space complexity = O(n)
 */
 function equillibriumIndex(A){
    let count = 0;
    let n = A.length;
    let pfSum = new Array(n);
    pfSum[0] = A[0];
    for(let i = 1; i < n ; i++){
        pfSum[i] = pfSum[i-1] + A[i];
    }
    for(let i = 0; i < n ; i++){
        let lSum = 0;
        if (i > 0){
            lSum = pfSum[i];
        }
        let rSum = pfSum[n-1] - pfSum[i];
        if(lSum === rSum){
            count++;
          //  console.log(i);
        }
    }
    
    return count;
 }
 //console.log(equillibriumIndex([-7, 1, 5, 2, -4, 3, 0]));

 //console.log(equillibriumIndex([-3, 2, 4, -1]));

 /**
  * Using carry forward
  */
  function equillibriumIndexCarryForward(A){
    let count = 0;
    let n = A.length;
    let lSum = 0;
    let rSum = 0
    let totalSum = 0;
    for(let i = 0; i < n ; i++){
        totalSum += A[i];
    }
  //  console.log(totalSum);

    for(let i = 1; i < n ; i++){
        lSum += A[i-1];
        rSum = totalSum - (A[i] + lSum);
        console.log(lSum);
        console.log(rSum);

        if(lSum === rSum){
            count++;
            //console.log(i);
        }
    }
    
    return count;
 }
 console.log(equillibriumIndexCarryForward([-3, 2, 4, -1]));
