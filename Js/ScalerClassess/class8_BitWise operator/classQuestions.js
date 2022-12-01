/**
 * Given an integer array where every element appears even number of times except 1 element that appears odd number of time
 * Find that unique / different element.
 * 6^9^6^4^6^2^4^6^9 = 2
 * 2^6^9^6^4^6^2^4^6^9^2 = 2 (2 present odd number of times)
 */
//1.
 function findUniqueElem(arr){
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        ans = ans ^ arr[i];
    }
    return ans;

    }
console.log(findUniqueElem([6,9,6,4,6,2,4,6,9]));
