function evenNumRange(A, B){
    let evenCount = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 === 0){
            evenCount++;
        }
        A[i] = evenCount;
    }
    let countArr = [];
    for(let i = 0; i < B.length; i++) {
        let C = B[i];
        if(C[0] === 0) {
            countArr.push(A[C[1]]);
        } else{
            countArr.push(A[C[1]] - A[C[0] - 1]);
        }

    }
    return countArr;

}
//evenNumRange([2, 1, 8, 3, 9], [[0,3], [2,4]]);

function oddNumRange(A, B){
    let pfSum = [];
    pfSum[0] = 0;
    for(let i = 1; i < A.length; i++){
        if(i % 2 !== 0){
            pfSum[i] = pfSum[i-1] + A[i];
        }else{
            pfSum[i] = pfSum[i-1];
        }
    }
    let countArr = [];
    for(let i = 0; i < B.length; i++) {
        let C = B[i];
        if(C[0] === 0) {
            countArr.push(pfSum[C[1]]);
        } else{
            countArr.push(pfSum[C[1]] - pfSum[C[0] - 1]);
        }

    }
    return countArr;

}
console.log(oddNumRange([1, 2, 3, 4, 5], [[0,2], [1,4]]));