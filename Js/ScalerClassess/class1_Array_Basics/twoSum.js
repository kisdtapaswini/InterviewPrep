/**
 * Given N array elements. Check if there exists a pair (i, j) such that arr[i] + arr[j] ==k and i !=j
 * Notes: i and j are indexes and k is the sum value
 * In both below cases Time complexity = O(n^2) and space complexity = O(1)
 */
// 1. BruteForce (Considering all pairs)
function returnSum (arr, k){
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < arr.length; j++){
           // console.log(arr[i]+ arr[j]);
            if(i !==j && arr[i]+ arr[j] === k){
                return true;
            }
        }
    }
    return false;

}
//console.log(returnSum([0, 4, -3, 7], 5)); //returns fasle
//console.log(returnSum([7, 3, 4, 2, 5], 6)); //returns true


// 2. If we consider only one traingle to avoid repeat pairs

function returnSum1 (arr, k){
    for(let i = 0; i <arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
           // console.log(arr[i]+ arr[j]);
            if(arr[i]+ arr[j] === k){
                return true;
            }
        }
    }
    return false;

}
//console.log(returnSum([0, 4, -3, 7], 5)); //returns fasle

//console.log(returnSum1([7, 3, 4, 2, 5], 6)); //returns true
