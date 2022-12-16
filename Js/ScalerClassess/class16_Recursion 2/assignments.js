function pow(a, b, c){
    if(b == 0) return 1 % c;

    let x = BigInt(pow(a, b/2));

    if(b % 2 === 0) {
        return (x * x) % c;
    }else {
        return (a * x * x) % c;

    }
}
function modOfPow(A, B, C){
    let ans = 1n , base = BigInt(A), c1 = BigInt(C);
    
   ans = pow(base,B, c1);
   console.log(ans);
  return ans % C;
}
console.log(modOfPow(213, 231, 1));