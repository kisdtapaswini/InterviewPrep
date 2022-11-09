function findTripletSum(arr, targetSum){
    let len = arr.length;
    let result = [];
    for(let i = 0; i < len-2; i++){
        for(let j = i + 1; j < len -1; j++){
            for(let k = j + 1; k < len; k++){
                if(arr[i] + arr[j] + arr[k] === targetSum){
                    result.push(arr[i]);
                    result.push(arr[j]);
                    result.push(arr[k]);
                    return result;
                }
            }
        }
    }
}
console.log(findTripletSum([1, 2, -3, 4, 5], 11));
/**
 * Brute Force Solution to loop through all elems
 * Here time complexity is O(n^3).
 */

