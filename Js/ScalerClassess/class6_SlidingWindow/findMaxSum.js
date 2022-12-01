/**
 * 1. Find N elements, print max subarray sum of length 'k'
 */
// Brute Force aprch
function findMaxSum(arr, k){
    let n = arr.length;
    let st = 0;
    let end = k-1;
    let maxSum = Number.MIN_VALUE;
    let nOfSubarray = 1;
    console.log(n-k+1);
    while(nOfSubarray <= n-k+1){ // we can also write while(end < n)
        let sum = 0;
        for(let i = st; i <= end; i++){
            sum += arr[i];
        }
        if(sum > maxSum){
            maxSum = sum;
        }
        st++;
        end++;
        nOfSubarray++;
    }
    console.log(maxSum);
}
//findMaxSum([-3,4,-2,5,3,-2,8,2,-1,4], 5);
// Optimised solution1 with prefix array
function findMaxSumOpti1(arr, k){
    let n = arr.length;
    let st = 0;
    let end = k-1;
    let maxSum = Number.MIN_VALUE;
    let nOfSubarray = 1;
    let pfSum = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        pfSum[i] = pfSum[i-1] + arr[i];
    }
    while(nOfSubarray <= n-k+1){ // we can also write while(end < n)
        let sum = 0;
        if(st ===0){
            sum = pfSum[end];
        }else{
            sum = pfSum[end] - pfSum[st - 1];
        }
        if(sum > maxSum){
            maxSum = sum;
        }
        st++;
        end++;
        nOfSubarray++;
    }
    console.log(maxSum);
    return maxSum;
}
//findMaxSumOpti1([-3,4,-2,5,3,-2,8,2,-1,4], 5);

// Optimised solution2 Sliding Window

function findMaxSumOpti2(arr, k){
    let n = arr.length; 
    let startIdx = 0;
    let sum = 0;
    let ans = Number.MIN_VALUE;
    for(let endIdx = 0; endIdx <arr.length; endIdx++){
        sum += arr[endIdx];
        if((endIdx - startIdx) +1 ===k){
            ans = Math.max(ans, sum);
            sum = sum - arr[startIdx++];
        }

    }
    console.log(ans);

}
//findMaxSumOpti2([-3,4,-2,5,3,-2,8,2,-1,4], 5);

/**
 * 1. Given arr[N] and a number B. Find and return the number of swaps to bring all the numbers  <= B together.
 * 
 * 
 **/
 function findMaxSumOpti3(arr, B){
    let n = arr.length; 
    let  windowSize = 0;
    windowSize = arr.filter(_ => _ < B).length;
    let startIdx = 0;
    let ntRequiredCOunt = 0;
    let endIdx;
    let min = Number.MAX_VALUE;
    for( endIdx = 0; endIdx < n; endIdx++){
        if(arr[endIdx] > B){
            ntRequiredCOunt++;
        }
        let currentwindowSize = (endIdx - startIdx) +1;
        if(currentwindowSize === windowSize){
            min = Math.min(min, ntRequiredCOunt);

            if(arr[startIdx] > B){
                ntRequiredCOunt--;
            }
           
            startIdx++;
        }

    }
   console.log(min);
}
findMaxSumOpti3([ 52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5, 84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29, 7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70 ], 19);

//findMaxSumOpti3([1,12,10,3,14,11,2,5,4,7], 8);
//findMaxSumOpti3([1,12,10,3,14,4], 5);