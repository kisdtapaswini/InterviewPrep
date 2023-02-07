//Q2. Rotated Sorted Array Search
function rotatedSorted(A, B){
    let low = 0;
    let n = A.length;
    let high = n - 1;
    let maxIdx = n-1;
    while(low <= high){
        let mid = low + parseInt((high-low)/2);
        if(mid + 1 < n && A[mid] > A[mid+1]){
            maxIdx = mid;
            break;
        }
        if(A[mid] < A[0]){
            high = mid-1;
        }else{
            low = mid + 1;
        }

    }
    console.log(maxIdx);
    let res = -1;
    if(B >= A[0]){
        res = binarySearch(A, B, 0, maxIdx);
    }else{
        res = binarySearch(A, B, maxIdx+1, n-1);
    }

    return res;
}

function binarySearch(arr, num, low, high){
    while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(num === arr[mid]){
        return mid;
    }
    if(num > arr[mid]){
        low = mid+1;
    }else{
        high = mid-1;
    }
    }
    return -1;
}
//console.log(rotatedSorted([ 9, 10, 3, 5, 6, 8 ], 11));
console.log(rotatedSorted([ 1, 7, 67, 133, 178 ], 1));