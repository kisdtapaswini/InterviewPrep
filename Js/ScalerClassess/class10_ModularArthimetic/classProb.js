function checkDivisibility3(A){
    let sum = BigInt(0);
    for(let i = 0; i < A.length; i++){
        sum += BigInt(A[i]);
    }
    console.log(sum);
    if(sum % BigInt(3) == 0){
        return 1;
    }
    return 0;
}
//console.log(checkDivisibility3([1, 2, 3]));

function checkDivisibility8(A){
    let n = A.length;
    if (n == 0){
        return 0;
    }
    if(n == 1 || n === 2){
        if((parseInt(A)) % 8  == 0){
            return 1
        }else{
            return 0;
        }
    }
    let last3digit = parseInt(A[n - 3])*100+ parseInt(A[n-2])*10+parseInt(A[n-1]);
    if(last3digit % 8 === 0){
        return 1;
    } else{
        return 0;
    }
}
//console.log(checkDivisibility8("16"));

function concatenate3Numbers(A, B, C){
    let ans = 0;
    //            ans = (A*10000) + (B*100) + C;

    if(A <= B  && A < C){
        if(B < C){
            ans = (A*10000) + (B*100) + C;
        }else{
            ans = (A*10000) + (C*100) + B;

        }
    }else if(B < A  && B < C){
        if(A < C){
            ans = (B*10000) + (A*100) + C;
        }else{
            ans = (B*10000) + (C*100) + A;

        }
    }else{
        if(A < B){
            ans = (C*10000) + (A *100)+B;
        }else{
            ans = (C*10000) + (B *100)+A;

        }
    }
    return ans

}
console.log(concatenate3Numbers(28, 97, 32));
