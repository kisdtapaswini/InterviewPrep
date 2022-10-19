function matrixMulti(A, B){
    var resultMatrix = new Array(A.length);

    for (let row = 0; row < resultMatrix.length; row++) {
        resultMatrix[row] = new Array(B[0].length);
    }

    for(let row = 0; row < A.length; row++) {
        for(let col = 0; col < B[0].length; col++){
            let sum = 0
            for(let k = 0; k < A[0].length; k++){
                sum += A[row][k]* B[k][col]
            }
            resultMatrix[row][col] = sum;
        }
    }
    return resultMatrix;
}
let mat1 = [[1, 2, 3],
            [4, 5, 6]
           ];

let mat2 =  [[10, 11],
                [20, 21],
                [30, 31]
            ];

console.log(matrixMulti(mat1, mat2));