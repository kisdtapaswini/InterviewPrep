//Q1. Delete one
function deleteOne(A){
    let n = A.length;
    let preGcd = [];
    preGcd[0] = A[0];
    let suffGcd = [];
    suffGcd[n-1] = A[n-1];
    for(let i = 1; i < n; i++){
        preGcd[i] = gcd(preGcd[i-1], A[i]);
    }
    for(let i = n-2; i >=0; i--){
     suffGcd[i] = gcd(suffGcd[i+1], A[i]);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        let gcdVal;
        if(i === 0){
            gcdVal = preGcd[0];
        }else if(i === n-1){
            gcdVal = suffGcd[n-1];
        }else{
            gcdVal = gcd(preGcd[i-1], suffGcd[i+1]);

        }
        max = Math.max(max, gcdVal);
    }
    return max;
}
function gcd(A, B){
    if(A === 0){
        return B;
    }
    return gcd(B%A, A);
}
//console.log(deleteOne([5, 15, 30]));
console.log(deleteOne([7, 21]));