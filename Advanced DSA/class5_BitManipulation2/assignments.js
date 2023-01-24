//Q1. Single Number III

function SingleNumber3(A){
    let uniqueBitsXor;
    let n = A.length;
    let setbit = null;;
    for(let n of A){
        uniqueBitsXor = uniqueBitsXor ^ n;
    }
    for(let b=0; b < 31 ; b++){
        if(checkBit(uniqueBitsXor, b)){
            setbit = b;
            break;
        }
    }

    let setXor;
    let unsetXor;
    for(let i = 0; i < n; i++){
        if(checkBit(A[i], setbit)){
            setXor = (setXor ^ A[i]);
        }else{
            unsetXor = (unsetXor ^ A[i]);
        }
    }

    console.log([setXor, unsetXor]);
}
function checkBit(N, bitPos){
   if((N >> bitPos) & 1){
        return true;
    }
    return false;
}
//console.log(SingleNumber3([1, 2, 3, 1, 2, 4]));
//console.log(SingleNumber3([ 186, 256, 102, 377, 186, 377 ]));
//console.log(256 ^ 102);

//Q2. Maximum AND Pair

function pairWithMaxAnd(A){
    let ans = 0;
    for(let b = 30; b >=0; b--){
        let count1s = 0;
        for(let i = 0; i < A.length; i++){
            if(checkBit(A[i], b)){
                count1s++;
            }
        }
        if(count1s > 1){
            ans = setBit(ans, b);
            for(let i = 0; i < A.length; i++){
                if(!checkBit(A[i], b)){
                    A[i] = 0;
                }
            }
        }
    }
    return ans;
}
function setBit(N, bitPos){
    return (N | (1<<bitPos));
}
console.log(pairWithMaxAnd([53, 39, 88]));