/** A n*m matrix, 
 * 1. col swap
 * 2. row swap
 * 3. bitwise OR of two given nums
 * 4. butwise AND of two given nums
 * Everything is based on 1 based index 
 * Time complexity = O(n*m) + Q O(n + m +1)-> (this is basicall Max (n, m))
 * [1, 2, 3
 *  4, 5, 6
 *  7, 8, 9]
 *  It's a row major order matrix so any element we can get arr[2][1] = R * M + c + 1
 */
function matrixGame(N, M, Q){
    let rowArr = new Array(N);
    let colArr = new Array(M);

    for(let i = 0; i < N; i++){
        rowArr[i] = i;
    }

    for(let j = 0; j < M; j++){
        colArr[j] = j;
    }

    for(let q = 0; q < Q; q++){
        let t = 1 // input we should take in the actual program
        if(t === 1){
            // take the input c1 and c2 and swap c1 and c2
            swap(c1 -1, c2-1) // as we are doing zero based and the input is in 1 index based

        }
        if(t === 2){ // swap rows
            // take the input c1 and c2 and swap c1 and c2
            swap(r1 -1, cr2-1) // as we are doing zero based and the input is in 1 index based

        }
        if(t === 3){
            A[x1][x2] = r[X1] * M + c[Y1] + 1;
            A[y1][y2] = r[y1] * M + c[y1] + 1;
            print A[x1][x2] | A[y1][y2];

        }
        if(t === 4){
            A[x1][x2] = r[X1] * M + c[Y1] + 1;
            A[y1][y2] = r[y1] * M + c[y1] + 1;
            print A[x1][x2] & A[y1][y2];

        }

    }


}
console.timeLog(matrixGame());