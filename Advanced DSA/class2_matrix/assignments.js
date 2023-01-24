//Q1. Sum of all Submatrices
function subMatrixSum(A){
    let n = A.length;
    let m = A[0].length;
    let PfMat = new Array(n).fill().map(() => new Array(m).fill());

    for(let row = 0; row < n; row++){
        PfMat[row][0] = A[row][0];
        for(let col = 1; col < m; col++){
            PfMat[row][col] = PfMat[row][col-1] + A[row][col];
        }
    }
    for(let col = 0; col < m; col++){
       PfMat[0][col] = PfMat[0][col];
        for(let row = 1; row < m; row++){
            PfMat[row][col] = PfMat[row-1][col] + PfMat[row][col];
        }
    }
    let Total = 0;
    for(let Rs = 0; Rs < n; Rs++ ){
        for(let Re = Rs; Re < n; Re++){
            for(let Cs = 0; Cs < m; Cs++){
                for(let Ce = Cs; Ce < m; Ce++){
                    if(Rs === 0 && C)
                    if(Rs === 0 ){
                        Total += PfMat[Re][Ce] - PfMat[Re][Cs-1];
                    }else if(Cs === 0){
                        Total += PfMat[Re][Ce] - PfMat[Rs-1][Ce];

                    }else{
                        Total += PfMat[Re][Ce] - PfMat[Rs-1][Ce] - PfMat[Re][Cs-1] + PfMat[Rs-1][Cs-1];
                    }
                }
            }
        }
    }
    return Total;
    
    // for(let i = 0; i < n; i++){
    //     for(let j = 0; j < m; j++){
    //         let elem = PfMat[i][j];
    //         console.log({i, j, elem });
    //     }
    // }
 //  return PfMat;
}
let mat = [ [1, 1, 3, 5],
            [1, 1, 4,5] ]
//console.log(subMatrixSum(mat));

//Q2. Sub-matrix Sum Queries
function subMatrixSumWithQueries(A, B, C, D, E){
    let n = A.length;
    let m = A[0].length;
    let PfMat = new Array(n).fill().map(() => new Array(m).fill());
    let ans = [];
    let modVal = (10e8) +7;
    for(let row = 0; row < n; row++){
        PfMat[row][0] = A[row][0];
        for(let col = 1; col < m; col++){
            PfMat[row][col] = (PfMat[row][col-1] % modVal + A[row][col] % modVal) % modVal;
        }
    }
    for(let col = 0; col < m; col++){
       PfMat[0][col] = PfMat[0][col];
        for(let row = 1; row < n; row++){
            PfMat[row][col] = (PfMat[row-1][col] % modVal + PfMat[row][col] % modVal) % modVal;
        }
    }
    let Q = B.length;
    for(let i = 0; i < Q; i++){
        let Rs1 = B[i]-1;
        let Cs1 = C[i]-1;
        let Re1 = D[i]-1;;
        let Ce1 = E[i]-1;
        ans.push(getSum(PfMat, Rs1, Cs1, Re1, Ce1));
    }

        return ans;
}
function getSum(PfMat1, Rs, Cs, Re, Ce){
    let val = PfMat1[Re][Ce] ;
    let modVal = (10e8) +7;
    if(Rs !==0 || Cs !==0 ){
        if(Rs !== 0 && Cs !==0){
            val = (val + PfMat1[Rs-1][Cs-1] % modVal) % modVal ;
        }
        if(Rs != 0){
            val -= PfMat1[Rs-1][Ce] % modVal;
        }
        if(Cs != 0){
            val -= PfMat1[Re][Cs-1] % modVal;
        }
    }
    if(val < 0) val = (val + modVal) % modVal;
    return val % modVal;
}

    // let val = PfMat1[Re][Ce];
    // if(Rs > 0){
    //     val -= PfMat1[Rs1-1][Ce1];
    // }
    // if(Cs > 0){
    //     val -= PfMat1[Re1][Cs1-1];
    // }
    // if(Rs > 0 && Cs > 0){
    //     val += PfMat1[Rs1-1][Cs1-1];
    // }
let A1 =[
    [5, 17, 100, 11],
    [0, 0, 2, 8]
  ]
// let B1 = [1, 2]
// let C1 = [1, 2]
// let D1 = [2, 3]
// let E1 = [2, 3]
B1 = [ 1, 1 ]
C1 = [ 1, 4 ]
D1 = [ 2, 2 ]
E1 = [ 2, 4 ]
//console.log(subMatrixSumWithQueries(A1, B1, C1, D1, E1));

//Q3. Search in a row wise and column wise sorted matrix

function searchElem(A, B){
    let n = A.length;
    let m = A[0].length;
    let i = 0;
    let j = m-1;
    let ans = Number.MAX_SAFE_INTEGER;
    while(i < n && j >= 0 ){
        let val = A[i][j];
        if(B === val){
            ans = Math.min(ans,(i + 1)*1009+(j+1));
            j--;
        }else{
            if(B < val){
                j--;   
            }else if(B > val){
                i++;
            }
        }
    }
    return ans != Number.MAX_SAFE_INTEGER ? ans : -1;
}

// let A2 = [[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]];
// let B2 = 2;
let A2 =
[
  [2, 8, 8, 8],
  [2, 8, 8, 8],
  [2, 8, 8, 8]
];
let B2 = 8;


//console.log(searchElem(A2, B2));




//Q4. Maximum Submatrix Sum using prefix SUm

function getMaxSum(mat){
    let n = mat.length;
    let m = mat[0].length;
    let pf = getPrefixMat(mat);
    let BR_Row = mat.length-1;
    let BR_Col = mat[0].length-1;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){ 
        for(let j = 0; j < m; j++){
            let sum = pf[BR_Row][BR_Col];
            let TL_Row = i;
            let TL_Col = j;
         //   console.log(sum);
            if(TL_Row > 0){
                sum -= pf[TL_Row - 1][BR_Col];
            //    console.log("row increase"+sum);

            }
            if(TL_Col>0){
                sum = sum- pf[BR_Row][TL_Col-1];
              //  console.log("col increase"+sum);

            }

            if(TL_Row > 0 && TL_Col > 0){
             //   console.log(TL_Row,TL_Col);
             //   console.log("both increased"+sum);

              sum += pf[TL_Row - 1][TL_Col-1]; // (TH_Row and TL_Col has been reduced twice from the Sum of(BR_Row, BR_Col),
                                                // so we need to add it once to get the correct sum)

            }
          //  console.log("---Final---"+sum);

            max = Math.max(sum, max);
        }
    }
    return max;
}
function getPrefixMat(A){
    let n = A.length;
    let m = A[0].length;
    let PfMat = new Array(n).fill().map(() => new Array(m).fill());

    for(let row = 0; row < n; row++){
        PfMat[row][0] = A[row][0];// if we are updating same matrix then this is not required
        for(let col = 1; col < m; col++){
            PfMat[row][col] = PfMat[row][col-1] + A[row][col];
        }
    }
    for(let col = 0; col < m; col++){
       PfMat[0][col] = PfMat[0][col];// if we are updating same matrix then this is not required
        for(let row = 1; row < n; row++){
            PfMat[row][col] = PfMat[row-1][col] + PfMat[row][col];
        }
    }
    return PfMat;
}
let Z =[
    [-5, -4, -3],
    [-1, 2, 3],
    [2, 2, 4]
  ]

//console.log(getMaxSum(Z));


//Q4. Maximum Submatrix Sum using Kedenes algo

