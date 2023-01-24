// Q4. Very Large Power
function largePow(A, B){
 
    let ans = BigInt(A);
    let modVal = 1000000007n;
    for(let i = 2; i <= B; i++){
        ans = pow(ans, i, modVal);
    }
    return Number(ans);
}
function pow(num, p, m){
    if (p === 0) return 1n % m;
    let halfpower = pow(num, Math.floor(p / 2), m) % m;
    halfpower = (halfpower * halfpower) % m;
    if (p % 2)
        return (num * halfpower) % m;
    return halfpower;
}
let A1 = 2;
let B1 = 10;
console.log(largePow(A1, B1));
let modVal1 = 1000000007n;

//console.log(pow(BigInt(2), 5, modVal1));