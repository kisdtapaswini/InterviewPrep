//1.
function findCountOfGreaterELem(A) {
    let max = A[0]; let count = 1;
    let n = A.length;
    for(let i = 1; i < n; i++){
        if(A[i] > max){
            max = A[i];
            count =1;
        }else if(A[i] == max){
            count++;
        }
    }
    return n - count;
}
//console.log(findCountOfGreaterELem([ 7, 4, 2, 10, 5 ]));
//console.log(findCountOfGreaterELem([ 5, 5, 3 ]));

//2. 
function findGoodPair(A, B){
    let n = A.length;
    // considering the above triangle
    for(let i = 0 ; i < n; i++ ){
        for(let j = i+1; j < n; j++){
            if(A[i] + A[j] == B){
                return 1;
            }
        }
    }
    // considering the below triangle 
    // for(let i = 1; i < n; i++ ){
    //     for(let j = 0; j < i; j++){
    //         console.log(i + " : "+j);
    //         if(A[i] + A[j] == B){
    //             return 1;
    //         }
    //     }
    // }
    return 0;
}
//console.log(findGoodPair([1,2,3,4], 7))

// 3.

function reverseARange(A, B, C){

    // while(B < C){
    //     let temp = A[B];
    //     A[B] = A[C];
    //     A[C] = temp; b = 11 c = 5
    //     B++;
    //     C--;
    // }

    // Without using a third variable
        while(B < C){
         //   let total = A[B] + A[C];
        A[B] = A[B] + A[C];
        A[C] =  A[B] - A[C];
        A[B] = A[B] - A[C];

        B++;
        C--;
    }
    return A;

}
//console.log(reverseARange([2, 5, 6], 0, 2));

//4. Rotate a array towards right
function rotate(A, B){
    reverseArr(A, 0, A.length-1);
    reverseArr(A, 0, B-1);
    reverseArr(A, B, A.length-1);
    return A;

}
function reverseArr(arr, i , j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
//console.log(rotate([1, 2, 3, 4], 3));

function findMinMax(A){
    let min = A[0];
    let max = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] < min){
            min = A[i];
        }else if(A[i] > max){
            max = A[i];
        }
    }
    return max + min;
}
//console.log(findMinMax([-2, 1, -4, 5, 3]));

function getFreq(A, B){
    let count = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] === B) {
            count++;
        }
    }
    return count;
}
//console.log(getFreq([1, 2, 2], 2));

function secondLargest(A){
    let max1 = A[0];
    let max2 = Number.MIN_VALUE;
    for(let i = 1; i < A.length; i++){
        if(A[i] > max1){
            max2 = max1;
            max1 = A[i];
        }
        else if(A[i] > max2 && A[i] != max1){
            max2 = A[i];
        }
    }
    return max2;

}
//console.log(secondLargest([2, 1, 2] ));

function timeToEquality(A){
    let max = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] > max){
            max = A[i];
        }
    }
    let count = 0;
    for(let i = 0; i < A.length; i++){
        count += max - A[i];
    }
    return count;
}
//console.log(timeToEquality([2, 4, 1, 3, 2]));

function rangeSum(A, B){
    let pfArr = [];
    pfArr[0] =  A[0];
    let result = [];

    for(let i = 1; i < A.length; i++){
        pfArr[i] = pfArr[i -1] + A[i];
    }

    console.log(pfArr);
    for(let i = 0; i < B.length; i++){
        let eachRange = B[i];
        if(eachRange[0] === 1){
            result.push(pfArr[eachRange[1]-1]);
        }else{
            result.push(pfArr[eachRange[1]-1] - pfArr[eachRange[0] - 2])
        }

    }
    return result;
}
//console.log(rangeSum([1, 2, 3, 4, 5], [[1, 4], [2, 3]]));
//console.log(rangeSum([2, 2, 2], [[1, 1], [2, 3]]));

function findEqillibriumIndex(A){
    let pfArr = [];
    pfArr[0] = A[0];
    for(let  i = 1; i < A.length; i++){
        pfArr[i] = pfArr[i - 1] + A[i];
    }
    for(let  i = 0; i < A.length; i++){
        let leftSum =0;
        if(i === 0){
            leftSum = 0;
        }else{
        leftSum = pfArr[i-1];
        }
        let rightSum = pfArr[pfArr.length-1] - pfArr[i];
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;

}
//console.log(findEqillibriumIndex([-7, 1, 5, 2, -4, 11, 9]));
//console.log(findEqillibriumIndex([1,2,3]));

function findRangeEven(A, B){
    let n = A.length;
    let pfCount = [];
    let evenCount = 0;
    for(let i = 0; i < n; i++){
        if(A[i] % 2 == 0){
           evenCount ++;
        }
        pfCount[i] = evenCount;  
    }
  let result=[];
    for(let i = 0; i < B.length; i++){
        let eachRange = B[i];
        if(eachRange[0] === 0){
            result.push(pfCount[eachRange[1]]);
        }else{
            result.push(pfCount[eachRange[1]] - pfCount[eachRange[0] - 1])
        }
    }
    return result;
}
console.log(findRangeEven([2, 1, 8, 3, 9], [[0,3], [2,4]]));