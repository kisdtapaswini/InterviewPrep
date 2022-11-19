function rowToColZero(mat) {
    let rows = mat.length;
    let cols = mat[0].length;

    var resMat = mat.map(function(arr) {
        return arr.slice();
    });

    for(let r = 0; r < rows; r++) {
       // let arr = new Array(mat[0].length).fill(0);
        for(let c = 0; c < cols; c++){
            if(mat[r][c] === 0){
                for(let c1 = 0; c1 < cols; c1++){
                    resMat[r][c1] = 0;
                }
                for(let r2 = 0; r2 < rows; r2++){
                    resMat[r2][c] = 0;
                }
            }
        }
    }
    console.log(resMat);
    return resMat;
}
//let matData = ;
rowToColZero([[0,2,3,4],
             [5,6,7,10],
             [9,2,0,4]]);

    // rowToColZero([
    //     [97, 18, 55, 1, 50, 17, 16, 0, 22, 14],
    //     [58, 14, 75, 54, 11, 23, 54, 95, 33, 23],
    //     [73, 11, 2, 80, 6, 43, 67, 82, 73, 4],
    //     [61, 22, 23, 68, 23, 73, 85, 91, 25, 7],
    //     [6, 83, 22, 81, 89, 85, 56, 43, 32, 89],
    //     [0, 6, 1, 69, 86, 7, 64, 5, 90, 37],
    //     [10, 3, 11, 33, 71, 86, 6, 56, 78, 31],
    //     [16, 36, 66, 90, 17, 55, 27, 26, 99, 59],
    //     [67, 18, 65, 68, 87, 3, 28, 52, 9, 70],
    //     [41, 19, 73, 5, 52, 96, 91, 10, 52, 21]
    //   ]);
   // rowToColZero([[1,1,1],[1,0,1],[1,1,1]]);