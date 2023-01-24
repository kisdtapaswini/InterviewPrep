//Q1. Count Pair Sum
function countPairSum(A, B){
    let countAns = 0;
    let map = new Map();
    for(let ele of A){
        let diff = B - ele;
        if(map.has(diff)){
            countAns += map.get(diff);
        }
        if(map.has(ele)){
            map.set(ele, map.get(ele)+1);
        }else{
            map.set(ele, 1);
        }
    }
    return countAns;
}
//console.log(countPairSum([ 9, 18, 17, 17, 6, 16, 13, 11, 15, 7 ], 15));

//Q2. Count Pair Difference
function countPairDiff(A, B){
    let countAns = 0;
    let map = new Map();
    for(let ele of A){
        let f1 = B + ele;
        let f2 = ele - B;
        if(map.has(f1)){
            countAns += map.get(f1);
        }
        if(map.has(f2)){
            countAns += map.get(f2);
        }
        if(map.has(ele)){
            map.set(ele, map.get(ele)+1);
        }else{
            map.set(ele, 1);
        }
    }
    console.log(map);
    return countAns;
}
//console.log(countPairDiff([1, 2, 1, 2], 1));

//Q3. Pair With Given Difference
function isExistsPairDiff(A, B){
   // let countAns = 0;
    let set = new Set();
    for(let ele of A){
        let f1 = B + ele;
        let f2 = ele - B;
        if(set.has(f1) || set.has(f2) ){
           return 1;
        }
        set.add(ele, 1);
    }
  //  console.log(map);
    return 0;
}
//console.log(isExistsPairDiff([10, 30], 10));

//Q4. Subarray with given sum
function firstSubArrWithGivenSm(A, B){
    let pfArr = [];
    let n = A.length;
    pfArr[0] = A[0];
    let count = 0;
    for(let i = 1; i < n; i++){
        pfArr[i] = pfArr[i-1] + A[i];
    } 
    console.log(pfArr);
    let map = new Map();
    for(let i = 0; i < pfArr.length; i++){
            if(pfArr[i] === B){
                count++;
            }else{
            let rest = pfArr[i] - B;
            if(map.has(rest)){
                count += map.get(rest);
            }
            }
            if(map.has(pfArr[i])){
                map.set(pfArr[i], map.get(pfArr[i])+1);
            }else{
                map.set(pfArr[i], 1);
            }
    }
    return count;
}
console.log(firstSubArrWithGivenSm([-18, -1, -13, -15, 18, 5, -4, 5, 9 ], 14));
//console.log(firstSubArrWithGivenSm([ -9, 7, -18, 3, 2, -18, -11 ], -15));
//console.log(firstSubArrWithGivenSm([ 5, 10, 20, 100, 105 ], 110));
//console.log(firstSubArrWithGivenSm([4, 5, 2, 3, 1, 8], 9));



//Q6. Is Dictionary?
function isDictionary(A, B){
    let map = new Map();
    for(let i = 0; i < B.length; i++){
        map.set(B[i], i+1);
    }
    for(let i = 1; i < A.length - 1; i++){
        if(!compare(A[i-1], A[i], map)){
            return 0;
        }
    }
    return 1;
}
function compare(str1, str2, m){
        let fst = m.get(str1[0]);
        let snd = m.get(str2[0]);
        if(fst <= snd && str1.length <= str2.length){
            return true;
        }
    return false;
}

//console.log(isDictionary(["hello", "scaler", "interviewbit"], "adhbcfegskjlponmirqtxwuvzy"));
//console.log(isDictionary([ "fine", "none", "no" ], "qwertyuiopasdfghjklzxcvbnm"));

//Q7. Valid Sudoku

function checkIfValidSudoku(A){
    let len = A.length;
    let mat = new Array(len).fill().map(() => new Array(len).fill());
    for(let i = 0; i < len; i++){
        let r = A[i];
        for(let j = 0; j < len; j++){
            mat[i][j] = r[j];
        }
    }

    for(let i = 0; i < len; i++){
        let setR = new Set();
        for(let j = 0; j < 9; j++){
          if(A[i][j] != '.'){
            if(setR.has(A[i][j])){
                return 0;
             }
             setR.add(A[i][j]);

          }
        }
     //   console.log(setR);

    }
    for(let i = 0; i < len; i++){
        let setC = new Set();
        for(let j = 0; j < 9; j++){
          if(A[j][i] != '.'){
            if(setC.has(A[j][i])){
                return 0;
             }
             setC.add(A[j][i]);
          }
        }
      //  console.log(setC);
    }

    let setBox = new Set();

    for(let i = 0; i < len; i++){
        for(let j = 0; j < 9; j++){
          let cellNo = (Math.floor(i/3)*3) + Math.floor(j/3);
          if(A[i][j] != '.'){
            let str = 'cell' + cellNo + A[i][j];
            if(setBox.has(str)){
                return 0;
             }
             setBox.add(str);
          }
        }
   //   console.log(setBox);
    }

    return 1;

}
//console.log(checkIfValidSudoku(["53..7....", "6.3195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"]));
//console.log(checkIfValidSudoku(["53..7....", "6.3195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"]));

