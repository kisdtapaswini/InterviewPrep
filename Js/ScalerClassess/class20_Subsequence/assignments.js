
//Q1. Little Ponny and 2-Subsequence

function findMinSubsequences(arr){
    let n = arr.length;
    let ans = arr[0] + arr[1];
    for(let i = 5; i < (1 << n); i++){
        let subseq = '';
        let count = 0;
        for(let j = 0; j < n; j++){
            if(checkBit(i,j)){
                subseq += arr[j];
                count++;
            }
        }
        if(count >= 2){
            ans = compare(ans, subseq);
        }
    }
    return ans;
}
function checkBit(num, i){
    if((num & (1 << i)) != 0){
        return true;
    }
    return false;

}
function compare(str1, str2){
    if(str1 === str2) {
        return str1;
    }

    if (str1 < str2) {
        return str1;
    }

    return str2;
}
//console.log(compare("cb", "ccb"));
//console.log(findMinSubsequences("scsecugqsb"));
//Q3. Subset
function getAllSubSet(arr){
    let n = arr.length;
  //  arr.sort();
    let result = [];
    for(let i = 0; i < (1 << n); i++){
        let subsetEach = [];
        for(let j = 0; j < n; j++){
            if(checkBit(i,j)){
                subsetEach.push(arr[j]);
            }
        }
        result.push(subsetEach.sort((a,b)=> a-b));
    }
    result.sort(sortFunction);
    return result;
}
function sortFunction(a, b) {
    let an = a.length;
    let bn = b.length;
    for(let i = 0; i < Math.min(an, bn); i++){
        if (a[i] !== b[i]) {
            return (a[i] < b[i]) ? -1 : 1;
        }


    }


}
//console.log(getAllSubSet([ 15, 20, 12, 19, 4 ]));
//Q1. Little Ponny and 2-Subsequence opti
function solve(arr){
    let n = arr.length;
    let minAsciCode1 = 122;
    let index1 = 0;
    let ans = '';
    for(let i = 0; i < n-1; i++){
        if(arr[i].charCodeAt(0) < minAsciCode1) {
            minAsciCode1 = arr[i].charCodeAt(0);
            index1 = i;
        }
    }
    ans = arr[index1];
    let index2 = 0;
    minAsciCode1 = 122;
    for(let i = index1 + 1; i < n; i++){
        if(arr[i].charCodeAt(0) < minAsciCode1) {
            minAsciCode1 = arr[i].charCodeAt(0);
            index2 = i;
        }
    }
    ans += arr[index2];
    return ans;

}
//console.log(solve("scsecugqsb"));
//Q2. SUBARRAY OR

function subArr(A){
    let totalSUm = 0;
    for(let i = 0; i < A.length; i++){
        let xorVal = A[i];
        for(let j = i; j < A.length; j++){
            xorVal = (xorVal | A[j])
            totalSUm += xorVal;
        }
    }
    return totalSUm;

}
//console.log(subArr([1, 2, 3, 4, 5]));

const MOD = 1000000007;
function mult(a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
        return val % MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function totalSubarrays(n){
    return (n * (n + 1)) / 2;
}

    function solve(A) {
        let ans = 0;
        let n = A.length;
        for (let bit = 0; bit <= 27; bit++) {
            let zeroes = [];
            for (let i = 0; i < n; i++) {
                if ((A[i] & (1 << bit)) == 0) {
                    if (i == 0 || (A[i - 1] & (1 << bit)) != 0) {
                        zeroes.push(0);
                    }
                    zeroes[zeroes.length - 1]++;
                }
            }
            console.log(zeroes);
            let count = 0;
            // total number of subarray of an array of size n
            count += totalSubarrays(n);
            let sub = 0;
            zeroes.forEach((x) => {
                // subtract the total number of subarrays possible from x elements
                sub += totalSubarrays(x);
            });
            count -= sub;
            // add the contribution due to the current bit
            ans = (ans + mult(count, 1 << bit)) % MOD;
        }
        return ans;
    }
    console.log(solve([1, 2, 3, 4, 5]));

