/**
 * Given an array, Reverse the entire array 
 * notes :- Change the given array
 */
function reverseArr(arr){
    let i = 0;
    let j = arr.length -1;
    while(i < j){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5,6,7]));
/**
 * 
 */
