function solve(A, B, C){
    let resultArr = [];
    for(let i =0; i< B; i++){
        let sum = 0;
        for(let j = 0; j < A; j++){
            sum += C[j][i];
        }
        resultArr[i]=(sum);
    }
    return resultArr;
    }
let arr = [[4, 1], [1, 3], [6, 2]]
console.log(solve(3, 2, arr));