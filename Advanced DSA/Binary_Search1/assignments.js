function binarySearch(A){

}
//console.log(binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 170));

//Q2. Find a peak element
function binarySearchFindPeak(arr){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        console.log(low + "," + high);
        if(low === high){
            return arr[low];   
        }
        let mid = Math.floor((low+high)/2);
        console.log(mid);


        if((arr[mid] > arr[mid-1]) && arr[mid] > arr[mid+1]){
            return arr[mid];

        }
        if(arr[mid] <= arr[mid+1]){
            low = mid+1;
        }else{
            high = mid-1;
        }

        console.log(low + "," + high);

    }
    return arr[low];
}
//console.log(binarySearchFindPeak([1, 1000000000, 1000000000]));

//Q4. Single Element in Sorted Array

function singleElemInSortedArr(A){
    let low = 0;
    let high = A.length - 1;
    let n = A.length;
    while(low <= high) {
        let mid = low + parseInt((high-low)/2);
        if((mid === 0 || A[mid] != A[mid-1]) && (mid == n-1 || A[mid] != A[mid+1])){
            return A[mid];
        }
        if(mid == n-1 || A[mid] === A[mid+1]){
            if(mid % 2 === 0){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }else{
            if(mid % 2 ==0){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }
}
//console.log(singleElemInSortedArr([1, 1, 7]));

//Q3. Search for a Range

function binarySearchRange(arr, num, flag){
    let low = 0;
    let high = arr.length - 1;
    let startingIdx = -1;

    let endingIdx = -1;
    while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(num === arr[mid]){
        if(flag){
            high = mid-1;
            startingIdx = mid;
        }else{
            console.log(low, mid, high);
            low = mid + 1;
            endingIdx = mid;
        }
    }else if(num > arr[mid]){
        low = mid+1;
    }else{
        high = mid-1;
    }
    }
    return flag ? startingIdx : endingIdx;
}
//console.log(searchRange([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ], 10));
function searchRange(A, B){
    let start = binarySearchRange(A, B, true);
    let end = binarySearchRange(A, B, false);
    return [start, end];
}

let A1 =[
    [3],
    [29],
    [36],
    [63],
    [67],
    [72],
    [74],
    [78],
    [85]
];
let B1 = 41;

function searchMatrix(A, B){
    let row = A.length;
    let col = A[0].length;
    let i = 0;
    let j = col-1;
    while((i >=0 && i < row) && (j >=0 && j < col)){
        console.log(A[i][j]);
     if(B === A[i][j]) {
        return 1;
     }else if(B > A[i][j]){
        i++;
     }else{
        j--;
     }
    }
    return 0;
}
console.log(searchMatrix(A1, B1));
