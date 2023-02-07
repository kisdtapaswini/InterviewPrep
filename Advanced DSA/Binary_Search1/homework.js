//Q4. Maximum height of staircase
function maxHeightStairCase(A){
    let low = 1;
    let high = A;
    while(low <= high){
        let mid = low + parseInt((high-low)/2);
  //      console.log(low, mid, high);

        let sum1 = parseInt((mid * (mid+1))/2); //15
        let sum2 = parseInt(((mid+1) * (mid+2))/2); //
        console.log(sum1, sum2);
        if(sum1 <= A && sum2 > A){
            return mid;
        }
        if(sum1 > A){
            high = mid-1;
        }
        else{
            low = mid + 1;
        }

    }
}
//console.log(maxHeightStairCase(20));

//Q1. Matrix Search

function matrixSearch(A, B){
    let row = A.length;
    let col = A[0].length;
    
}
let Arr = [ 
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]  
  ]
console.log(matrixSearch(Arr, 3));