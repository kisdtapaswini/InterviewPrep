/**
 * Given ar[N] and Q queries in the same array. For each query, calculate sum of all the elements in the given range.
 */
//1. Brute Force solution
// Time complexity = O(n^2)
// Space complexity = O(1)
function sumOfAllQueries(arr, Q){
    let resultArr = [];
    for(let i = 0 ; i < Q.length; i++){
        let sum = 0;
        let L = Q[i][0];
        let R = Q[i][1]
        for(let j = L; j <= R; j++){
            sum += arr[j];
        }
        resultArr.push(sum);
    }
    return resultArr;
}
//console.log(sumOfAllQueries([-3, 6, 2, 4, 5, 2, 8, -9, 3, 1],[[4, 8], [3, 7], [1, 3]]));

//2. Optimised one
/**
 * 1. Construct a prefix Sum arr, pf
 * 2. Answer all queries if(i === 0), sum is pf[j] else sum is pf[j] = pf[i-1]
 *  Time complexity = O(n)
    Space complexity = O(1)
*/
function prefixSum (A, Q){
    let result = [];
    for(let i = 1; i < A.length ; i++){
        A[i] = A[i-1] + A[i];
    }
      for(let j = 0; j < Q.length; j++){
        let C = Q[j];

        if(C[0] == 1){
            result.push(A[C[1]-1]);
        }else{
            result.push(A[C[1]-1] - A[C[0] - 2]);
        }
    }
    return result;

}
console.log(prefixSum([1, 2, 3, 4, 5],[[1, 4], [2, 3]]));
