/**
 * You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (1 - indexed).
 * @param {*} A 
 * @param {*} B 
 * @returns 
 */
function rangeSum (A, B){

    for(let i = 1; i < A.length ; i++){
        A[i] = A[i-1] + A[i];
    }
    console.log(A[3]);
    let result =[];
      for(let j = 0; j <= B.length; j++){
        let C = B[j];
        if(C[0] === 1){
            result.push(A[C[1]-1]);
        }else{
            result.push(A[C[1]-1] - A[C[0] - 2]);
        }
        console.log(result);
       return result.join();
    }
}
let A1 = [1, 2, 3, 4, 5];
let B1 = [[1, 4], [2, 3]];
rangeSum(A1, B1);