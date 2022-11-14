/**
 * 1.Given arr[N], [startingIdx, endingidx], print subarray from startingIdx and endIdx
 * 
 */
function printSubAarra(arr, sIdx, eIdx){
    for(let i = sIdx; i <= eIdx; i++){
        console.log(arr[i]);
    }
}
//printSubAarra([2,4,1,5,6], 0, 3);

/**
 * 2. Given ar[4], print all subArrays.
 */

function printAllSubArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let subarray ='';
            for(let k = i; k <= j; k++){
                subarray += arr[k];

            }
            console.log(subarray);
        }
    }
}
// printAllSubArray([2,4,1]);
/**
 * 3. Given N array elements, print each sub array sum;
 */
// Brute Force
// Time complexity = O(n^3)
// Space complexity = O(1)

function sumOfAllSubArray(arr){
    let totalSum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let sumSubArr =0;
            for(let k = i; k <= j; k++){
                sumSubArr += arr[k];

            }
            totalSum +=  sumSubArr;
        }
    }
    console.log(totalSum);
}
//sumOfAllSubArray([2,4,1]);

// Using prefix Sum array, print each sub array sum
// Time complexity = O(n^2)
// Space complexity = O(n)

function sumOfAllSubArrayPrefixSum(arr){
    let len = arr.length;
    let pfSum = [arr[0]];
    for(let i = 1; i< len; i++){
        pfSum[i] = pfSum[i-1] + arr[i];
    }
    let subArrSum = 0;

    for(let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            if(i === 0){
                subArrSum = pfSum[j];
            }else{
                subArrSum = pfSum[j] - pfSum[i-1];
            }
            console.log(subArrSum);
        }
    }
}
//sumOfAllSubArrayPrefixSum([2,4,1]);

/**
 * 3. Given N array elements, print all subarray sums starting at index 3
 */

 function sumOfSubArrayCarryForward(arr){
    let len = arr.length;
    let subArrSum = 0;

    for(let i = 3; i < len; i++){
       subArrSum += arr[i];
    }
        console.log(subArrSum);
        return subArrSum;
}
//sumOfSubArrayCarryForward([2,4,1, 2, 4, 5]);


/**
 * 4. Given N array elements, print all subarray sums starting at index 0 and also print the total sumall subarrays sum
 * // Time complexity = O(n^2)
// Space complexity = O(1)
 */

 function sumOfAllSubArrayCarryForward(arr){
    let len = arr.length;
    let allSubArraySum = 0;

    for(let i = 0; i < len; i++){
        let sum = 0;
        for(let j = i; j < len; j++){
            sum += arr[j];
            allSubArraySum += sum;
            console.log(sum);
        }
    }
      //  console.log("c"+allSubArraySum);
        return allSubArraySum;
}
//sumOfAllSubArrayCarryForward([2,4,1, 2, 4, 5]);
sumOfAllSubArrayCarryForward([15, 8, 16]);

/**
 * 5. Final and the best solution 
 * Given an array arr[n], return the sum of all subarrays sum(not each subarray)
 */
 function sumOfAllSubArrayBestSolution(arr){
    let len = arr.length;
    let allSubArraySum = 0;
    for(let i = 0; i < len; i++){
        allSubArraySum = allSubArraySum + arr[i] * (i+1) * (len-i);
    }
        console.log(allSubArraySum);
        return allSubArraySum;
}
//sumOfAllSubArrayBestSolution([2,4,1, 2, 4, 5]);
//sumOfAllSubArrayBestSolution([6,8,-1,7]);

    function subarraySum(A){
        let sum=BigInt(0);
        for(var i=0; i<A.length;i++){
        sum = sum + BigInt(A[i])*BigInt(i+1)*BigInt(A.length-i);
        }
        return sum;
    
    }