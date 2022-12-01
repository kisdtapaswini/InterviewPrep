/**
 * Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.
 */

 function fillMatCLockWise(A){
    let mat = Array(A).fill(0).map(x => Array(A).fill(0))
    let n = A;
    let str = '';
    let i = 0;
    let j = 0;
    let count = 1;
    while(n > 1){

    for(let k = 1; k <=n-1; k++){
        mat[i][j] = count;
        count++;
        j++;
    }
    //  i = 0;
    //  j = n-1;
    for(let k = 1; k <= n-1; k++){
        mat[i][j] = count;
        count++;
        i++;
    }
    //  i = n-1;
    //  j = n-1;

    for(let k = 1; k <= n-1; k++){
        mat[i][j] = count;
        count++;
        j--;
     }
    // i = n-1;
    // j = 0;
    for(let k = 1; k <=n-1; k++){
        mat[i][j] = count;
        count++;
        i--;
    }
        i++;
        j++;
        n = n-2
    }
    if(n === 1){
       mat[i][j] = count++; 
    }
    console.log(mat);

}
//fillMatCLockWise(5);
function transposeMatWithRectangularMat(A){
    let n = A.length;
    //    let mat = Array(A).fill(0).map(x => Array(A).fill(0))
      //  let mat = Array(A[0].length).fill(new Array(A.length));

    let resMat = new Array(A[0].length);
    for (var i = 0; i < resMat.length; i++) {
    resMat[i] = new Array(A.length);
    }

        for(let i = 0; i < resMat.length; i++){
            for(let j = 0; j < resMat[0].length; j++){
                resMat[i][j] = A[j][i];
            }
        }

        return resMat;
}
//console.log(transposeMatWithRectangularMAt([[1, 2, 3],[4, 5, 6,10],[7, 8, 9,10]]));
function transposeMatWithSquareMat(A){
    let n = A.length;
        for(let i = 0; i < n; i++){
            for(let j = i+1; j < n; j++){
                let temp = A[j][i]
               A[j][i] =  A[i][j];
               A[i][j]  = temp;
            }
        }
        for(let i = 0; i < n; i++){
            reverseArray(A[i]);
           }

        return A;
}
console.log(transposeMatWithSquareMat([[1, 2],[3, 4]]));

function rotate90Mat(A){
    let n = A.length;
    //    let mat = Array(A).fill(0).map(x => Array(A).fill(0))
      //  let mat = Array(A[0].length).fill(new Array(A.length));

    let resMat = new Array(A[0].length);
    for (var i = 0; i < resMat.length; i++) {
    resMat[i] = new Array(A.length);
    }

        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                resMat[i][j] = A[j][i];
            }
        }

        for(let i = 0; i < n; i++){
         reverseArray(resMat[i]);
        }
      //  reverseArray(resMat[1]);
       //     console.log(resMat[1]);

        return resMat;
}
//console.log(rotate90Mat([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
//console.log(rotate90Mat([[1, 2],[3, 4]]));
function reverseArray(arr){
    console.log(arr);
    let i = 0;
    let j = arr.length -1;
    while(i < j){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    return arr;
  }
