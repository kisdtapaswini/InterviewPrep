//Q1. Largest Coprime Divisor
function largestCoPrime(A, B){
    while(gcd(A, B) != 1){
        A = A/gcd(A, B);
    }
    return A;
}
function gcd(a, b){
    if(a === 0){
        return b;
    }
    return gcd(b % a, a)
}
//console.log(largestCoPrime(30, 5));

//Q2. Divisor game
function divosorGame(A, B, C){
    let lcm = (B*C)/gcd(B, C);
    return A/lcm;
}
//console.log(divosorGame(12, 3, 2));
//console.log(divosorGame(81991, 2549, 7));


//Q3. All GCD Pair
function allGCDPair(A){
    let originalArr = new Array();
    let map = new Map();
    A.sort((a, b)=> b-a);
    originalArr[0] = A[0];
    for(let i = 1; i < A.length; i++){
        // if(map.has(A[i])){
        //    map.set(A[i], map.get(A[i])-1);
        // }else{
        //     originalArr.push(A[i]);
        //     for(let j = 0; j < originalArr.length -1; j++){
        //       //  console.log(originalArr[originalArr.length-1], A[j]);
        //          let gcd1 = gcd(originalArr[originalArr.length-1], A[j]);
        //          console.log(gcd1);
        //         if(map.has(A[i])){
        //             map.set(gcd(gcd1), map.get(gcd1) +2);
        //         }else{
        //             map.set(gcd(gcd1), 2);
        //         }

        //     }
        // }
    }
    return originalArr;
}
///console.log(allGCDPair([2, 2, 2, 2, 8, 2, 2, 2, 10]));



