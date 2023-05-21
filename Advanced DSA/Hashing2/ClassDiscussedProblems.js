function findNoOfRightAngleTriangle(A, B){
    let count = 0;
    let n = A.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j) continue
            for(let k = 0; k < n; k++){
                if(k === i || k === j)continue
                if(A[i] === A[j] && B[i] === B[k]){
                    console.log(A[i]+","+B[i]);
                    console.log(A[j]+","+B[k]);
                    console.log("----");

                    count++;
                }
            }
        }
    }
    return count;
}
console.log(findNoOfRightAngleTriangle([1, 1, 3, 5, 5],[1, 3, 3, 3, 1]));