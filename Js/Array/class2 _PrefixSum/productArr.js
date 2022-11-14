/**
 * Product array
 */
function prodArr(A){
    let n = A.length;
    let leftProdArr = [1];
    let rightProdArr = [];
    rightProdArr[n-1] = 1;
    for(let i = 1; i <n; i++){
        leftProdArr[i] = leftProdArr[i-1]*A[i-1]
    }
    for(let i = n-2; i >= 0; i--){
        rightProdArr[i] = rightProdArr[i+1]*A[i+1]
    }
    for(let i = 0; i < n; i++){
        A[i] = leftProdArr[i] * rightProdArr[i];
    }
    return A;
}
console.log(prodArr([1,2,3,4,5]));