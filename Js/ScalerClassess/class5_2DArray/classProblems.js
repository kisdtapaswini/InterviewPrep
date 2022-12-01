/**
 * 1. Given mat [n][m], print row wise sum
 * Time complexity = O(n*m)
 * Space complexity = O(1)
 */
function rowSumMat(mat){
    for(let row = 0; row < mat.length; row++){
        let sum =0;
        for(let col = 0; col < mat[0].length; col++){
            sum+=mat[row][col];
        }
        console.log(sum);
    }
}
// console.log(rowSumMat([[1,2,3,4],
//                     [2,6,7,8],
//                     [3,4,5,6]]));

/**
 * 2. Given mat [n][m], print col wise sum
 *  * Time complexity = O(n*m)
 * Space complexity = O(1)
 */
 function colSumMat(mat){
    for(let col = 0; col < mat[0].length; col++){
        let sum =0;
        for(let row = 0; row < mat.length; row++){
            sum+=mat[row][col];
        }
        console.log(sum);
    }
}
// console.log(colSumMat([[1,2,3,4],
//                     [2,6,7,8],
//                     [3,4,5,6]]));

/**
 * 3.Given a square matrix, mat[n][n]. Print left to right diagonal
 * time complexity is O(n)
 * space complexity is O(1)
 */
 function printLeftDiogonalMat(mat){
    let i = 0;
    while(i < mat.length){
    console.log(mat[i][i]);
    i++;
    }
}
// console.log(printLeftDiogonalMat([[1,2,3],
//                     [2,6,7],
//                     [3,4,5]]));

/**
 * 4.Given a square matrix, mat[n][n]. Print right to left diagonal
 * time complexity is O(n)
 * space complexity is O(1)
 */
function printRightDiogonalMat(mat){
    let i = 0;
    let j = mat.length -1;
    while(i < mat.length && j >=0){
        console.log(mat[i][j]);
        i++;
        j--;
    }
}
// console.log(printRightDiogonalMat([[1,2,3],
//                                     [2,6,7],
//                                     [8,4,5]]));

/**
 * 5. Given a mat[n][m], print all diagonals in right to left manner
 * notes; diagonals starting from 0th row or m-1 col;
 */
 function printAllDiagonals(mat){
    for(let col = 0; col < mat[0].length; col++){
        let i = 0;
        let j = col;
        while(i < mat.length && j >=0){
            console.log(mat[i][j]);
            i++;
            j--;
        }
    }


}
// console.log(printAllDiagonals([[1,2,3,4],
//                                [2,6,7,8],
//                                [3,4,5,6]]));

/**
 * 5. Given a mat[n][n], calculate transpose of matrix mat (make every row as a=column and every column as row)
 * If without using extra space then to get transposed matrix the matrix should be square matric only
 * 
 */
 function transposeMat(mat){
    for(let col = 0; col < mat[0].length; col++) {
        for(let row = col+1; row < mat.length; row++) {
            console.log(col +" : "+row);
            let temp = mat[row][col];
            mat[row][col] = mat[row][col];
            mat[row][col] = temp;
        }
    }
    for(let row = 0; row < mat.length; row++){
        let arr =[];
        for(let col = 0; col < mat[0].length; col++){
            arr.push(mat[row][col]);
        }
        console.log(arr);
    }
}
//console.log(transposeMat([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));

function antiDiagonals(mat){
    let resulrArr = new Array(mat.length-1);
    for(let col = 0; col < mat[0].length; col++){
        let i = 0;
        let j = col;
        let arr = new Array(mat.length).fill(0);
        while(i < mat.length && j >=0){
            arr[i] = mat[i][j];
            i++;
            j--;
        }
        resulrArr[col] = arr;
    }

    for(let r = 1; r < mat.length; r++){
        let i = r;
        let j = mat[0].length-1;
        let k = 0;
        let arr = new Array(mat.length).fill(0);
        while(i < mat.length && j >= 0){
            arr[k] = mat[i][j];
            i++;
            j--;
            k++;
        }
       resulrArr.push(arr);
    }
    return resulrArr;
}
// console.log(antiDiagonals([[1,2,3],
//                            [4,5,6,],
//                            [7,8,9]]));

/**
 * Given a mat [n][n], print the boundary elements in clockwise direction
 */

function printClockWise(mat){
    let n = mat[0].length;
    let str = '';
    let i = 0;
    let j = 0;
    while(n > 1){

    for(let k = 1; k <=n-1; k++){
        str += mat[i][j]+" ";
        j++;
    }
    //  i = 0;
    //  j = n-1;
    for(let k = 1; k <= n-1; k++){
        str += mat[i][j]+" ";
        i++;
    }
    //  i = n-1;
    //  j = n-1;

    for(let k = 1; k <= n-1; k++){
        str += mat[i][j]+" ";
        j--;
     }
    // i = n-1;
    // j = 0;
    for(let k = 1; k <=n-1; k++){
        str += mat[i][j]+" ";
        i--;
    }
        i++;
        j++;
        n = n-2
    }
    if(n === 1){
       str += mat[i][j]; 
    }
    console.log(str);

}
console.log(printClockWise([[1,2,3],
                            [4,5,6,],
                            [7,8,9]]));