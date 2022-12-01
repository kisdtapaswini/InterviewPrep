/**
 * Closest Min-Max
 * Given an array, find the length of smallest subarray which contains both min & max array
 */
/**
 * Observations :
 *      1. If (min Value  === max value) then ans is 1 (e.g [8,8,8,])
 *      2. We need only one min and one max in the answer subarray (e.g [min, min max] is nt the naser but [min, max] we should consider)
 *      3. Min and Max must be present at the corners
 *      4. SubArray[i,j] then len = j-i+1
 *      5. i.Case one [max min] (For a max we need to consider the nearest minimum)
 *          ii. Case Two [min max] (For a min we need to consider the nearest maximum)
 */

// Brute Force 
// time complexity = O(n^2)
// space complexity = O(1) 
function closestMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    let len = arr.length;
    let ans = len;
    for(let i = 1; i < len; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    if(min === max){
        return 1;
    }
    for(let i = 0; i < len; i++){
        if(arr[i] === max){
            for(let j = i+1; j < len; j++){
                if(arr[j] === min){
                    ans = Math.min(ans, j - i +1);
                }
            }

        }
        if(arr[i] === min){
            for(let j = i+1; j < len; j++){
                if(arr[j] === max){
                    ans = Math.min(ans, j - i +1);
                }
            }
        }
    }
    return ans;

}
//console.log(closestMinMax([1, 3]));
console.log(closestMinMax([2,2,6,4,5,1,5,2,6,4,1,3,4]));

//optimised code
function closestMinMaxOpti(arr){
    let min = arr[0];
    let max = arr[0];
    let len = arr.length;
    let ans = len;
    let minIndex = -1;
    let maxIndex = -1;
    for(let i = 1; i < len; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    if(min === max){
        return 1;
    }
    for(let i = 0; i < len; i++){
        if(arr[i] === max){
            maxIndex = i;
        }
        if(arr[i] === min){
            minIndex = i;
        }
        if(minIndex != -1 && maxIndex != -1){
            ans = Math.min(ans, Math.abs(maxIndex - minIndex) +1)
        }
    }
    return ans; 
}
console.log(closestMinMaxOpti([1, 3]));

