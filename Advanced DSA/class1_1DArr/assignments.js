//Q2. Continuous Sum Query
function contiSumQ(A, B){
    ansArr = new Array(A).fill(0);
    for(let i = 0 ; i< B.length; i++){
        let x = B[i][0];
        let y = B[i][1];
        let amt = B[i][2];
       for(x; x <= y; x++){
            ansArr[x-1] += parseInt(amt);
        }
    }
    return ansArr;
}
//console.log(contiSumQ(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]]));

//Q3. Maximum Absolute Difference
// Brute Force Solution with O(n^2)
function MaxAbsoluteDiff (A){
    let max = 0;
    let n = A.length;
    for(let i = 0; i < n; i++){
        let val = 0;
        for(let j = i + 1; j < n; j++){
          val = Math.abs(A[i] - A[j]) + Math.abs(i - j); 
          max = Math.max(val, max);
        }
    }
    return max;
    
}
//console.log(MaxAbsoluteDiff([1, 3, -1]));

//Q3. Maximum Absolute Difference

function MaxAbsoluteDiffOpti (A){
        let n = A.length;

        let max1 = max2 = Number.NEGATIVE_INFINITY;
        let min1 = min2 = Number.POSITIVE_INFINITY;

        for (let i = 0; i < n; i++) {
            max1 = Math.max(max1, A[i] + i); //case 1 AND 2
            max2 = Math.max(max2, A[i] - i); // CASE 3 AND 4

            min1 = Math.min(min1, A[i] + i); ////case 1 AND 2
            min2 = Math.min(min2, A[i] - i); ////case 3 AND 4
        }
        let ans = Math.max((max1 - min1), (max2 - min2));
        return ans;
}
console.log(MaxAbsoluteDiffOpti([1, 3, -1]));