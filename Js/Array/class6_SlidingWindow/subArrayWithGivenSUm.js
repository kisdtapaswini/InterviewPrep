function subarrayWithGivenSum(A, B,C){
    let sum = 0;
    let startIdx = 0
    let windowSize = B;
    let count = 0;
    for(let endIdx = 0; endIdx < A.length; endIdx++){
        sum += A[endIdx];
        if((endIdx - startIdx) +1 === windowSize){
            if(sum === C){
                count++;
            }
            sum = sum - A[startIdx++];
        }
    }
    return count;
}
console.log(subarrayWithGivenSum([ 43, 38, 72, 11, 43, 47 ], 4, 43));