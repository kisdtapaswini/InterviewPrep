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
console.log(rotate([1, 2, 3, 4], 3));
