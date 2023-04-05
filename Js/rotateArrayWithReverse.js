/**
 * Rotate to left (rigth part of the array will get filled with left part)
 */

function rotateArryWithReverse(arr, n, d){
    if(d===0){
        return arr;
    }
    d = d % n;
    reverseArray(0, n-1, arr);
    reverseArray(0, d-1, arr);
    reverseArray(d, n-1, arr);
    return arr;

}
console.log(rotateArryWithReverse([1,5,6,8,4], 5, 7));
function reverseArray(start, end, arr){
    let i = start,
        j = end;
    while(i < j){ 
        swap(i, j, arr);
        i++;
        j--;
    }

}
function swap(i, j, arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//////////////////////////////////////////
/**
 * Rotate to right k steps (left side of array is getting fill with right part)
 */
var rotate = function(nums, k) {
    if(nums.length === 1){
        return nums;
    }
    k = k % nums.length;
    reverse(0, nums.length-1, nums);
    reverse(0, k-1, nums);
    reverse(k, nums.length-1, nums);
    return nums;
};
var reverse = function (start, end, arr) {
    while(start < end){
        swap(start, end, arr);
        start++;
        end--;
    }
}
var swap = function(indx1, indx2, arr){
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}