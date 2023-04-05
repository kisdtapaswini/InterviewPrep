/**
 * Find the rotaion point of a sorted and rodated arr
 */

function findRotationPoint(A){
    let low = 0;
    let high = A.length - 1;
    let ans = -1;
    while(low <= high){
        let mid = low + parseInt((high - low)/2);
        if(A[mid] > A[0]){
            low = mid+1;
        }else{
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}

function binarySearch(A1, B1){
    let low = 0;
    let high = A1.length-1;

}

//console.log(findRotationPoint([4, 5, 8, 10, 11, 12, 1, 2, 3]));

function findRotationElemInRotatedArr(A, B){
    let pivot = findRotationPoint(A);
    let low = 0;
    let high = A.length-1;
    let ans = -1;
    while(low <= high){
        let mid = low + parseInt((high - low)/2);
        if(B === A[mid]){
            return mid;
        }else if(B > A[mid] && B < A[low]){
            high = mid-1;
        }else{
            low = mid+1;

        }
    }
}

//console.log(findRotationElemInRotatedArr([10, 20, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20));

/**
 * Given an array sorted in ASC order, Find the floor of a given number k
 * floor(k) - The greatest no less than or equals to  k
 */

function findFloorVal(A, k){
    let low = 0;
    let high = A.length -1;
    let ans = Number.MIN_SAFE_INTEGER
    while(low <= high){
        let mid = low + parseInt((high-low)/2);

        if(A[mid] > k){
            high = mid -1;
        }else{
            ans = Math.max(mid, ans);
            low = mid + 1;
        }
    }
    return A[ans];
}
//console.log(findFloorVal([-5, 2, 3, 6, 9, 10, 11, 15, 18], 17));

/**
 * We are given an array of integers of size N and a basket containing targeted number of apples B.
 * You have to make the basket empty. Consider an operation where Bob can eat either the front or the back and
 * make basket empty
 * 
 * Return the minimum numner of operations required to make the basket empty. If it's not possible, return -1.
 */


function bobMakingBasketEmpty(A, NoOfApples){
    let pfArr = [];
    pfArr[0] = A[0];
    for(let i = 1; i < A.length; i++){
        pfArr[i] = pfArr[i-1] + A[i];
    }
    let low = 0;
    let high = pfArr.length -1;
    let ans = Number.MIN_SAFE_INTEGER
    while(low <= high){
        let mid = low + parseInt((high-low)/2);
        if(pfArr[mid] === NoOfApples){
            return ;
        }else if(pfArr[mid] > NoOfApples){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }


//    console.log(pfArr);

}
console.log(bobMakingBasketEmpty([3,1,1,2,5,1,1], 7))