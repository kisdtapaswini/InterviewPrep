function isValidBSTPreOrderTraversal(A) {
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;

    for(let i = 1; i < A.length; i++){
        if(A[i] > A[i-1]){
            min = A[i-1];
        }else{
            max = A[i-1];
        }
        if(A[i] < min || A[i] > max){
            return false;
        }
    }
    return true;

}
console.log(isValidBSTPreOrderTraversal([1, 5, 6, 4]));