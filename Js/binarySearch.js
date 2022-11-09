// Binary Search with Recursion

function binarySearch(arr, num, low, high){
    let mid = Math.floor((low+high)/2);
    if(num === arr[mid]){
        return mid
    }else if(num > arr[mid]){
        return binarySearch(arr, num, mid+1, high);
    }else{
        return binarySearch(arr, num, 0, mid-1)
    }
}
// console.log(binarySearch([1,4,6,7,11,15,25], 11, 0, 6));

// Binary Search with Recursion
function binarySearch(arr, num, low, high){
    while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(num === arr[mid]){
        return mid;
    }else if(num > arr[mid]){
        low = mid+1;
    }else{
        high = mid-1;
    }
    }
    return 'nt found';
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5, 0, 9));