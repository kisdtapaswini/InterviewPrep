// Find the smallest allPrimeUptoMax factor(SPF) of any number

function smallestSPF(n){
    let isPrimeSieve = new Array(n+1).fill(0);
    for(let i = 2; i < isPrimeSieve.length; i++) {
        if(isPrimeSieve[i] == 0){
            for(let j = i; j < isPrimeSieve.length; j+=i){
                isPrimeSieve[j]+=1;
            }
        }
    }

    let count = 0;
        for(let  i = 2; i < isPrimeSieve.length; i++){
            if(isPrimeSieve[i]==2){
                count++;
            }
        }
    return isPrimeSieve;
}
//console.log(smallestSPF(8));

//Q1. Factorial Array


function solve(A){
    let n = A+1;
    let resuArr = [];
    let arr = new Array(n).fill(true);
    for(let i = 2; i < n; i++){
            for(let j = i*i; j < n ;j+=i){
                arr[j] = false;
            }

    }
    let map = new Map();
    for(let i = 2; i < n; i++){
        if(arr[i]){
            map.set(i, 1);
        }
    }
    map.forEach((_,keys)=>{
        let ar = []
        if(map.has(A - keys)){
            ar.push(keys);
            ar.push(A-keys);
            resuArr.push(ar);

        }

      });
      return resuArr[0];
    
  //  console.log(map);

}
//console.log(solve(28));
//console.log(solve(10));

function convertToTitle(A){
    let res ="";
    A = A-1;
    
        while(A>=0){
        let letter = A%26;
        res = String.fromCharCode(letter+65) + res;
        A = A/26-1
        }
    return res;
    }
//    console.log(convertToTitle(55));

//Q1. Factorial Array
function factoArr(A){
    A.sort((a,b)=>a-b);
    let max = A[A.length - 1];
    let primeArray = new Array(max + 1).fill(true);
    primeArray[0] = primeArray[1] = false;
    for(let i = 2; i <= max; i++){
        if(primeArray[i]){
            for(let j = i*i; j <= max; j+=i){
                primeArray[j] = false;
            }
        }
    }
    let allPrimeUptoMax = [];
    for(let i = 2; i <= max; i++){
        if(primeArray[i]){
            allPrimeUptoMax.push(i);
        }
    }
    //console.log(allPrimeUptoMax);
    let j = 0;
    while(A[j] < 2) {
        j++;
    }
    let ans = 0;
    for (let i = 0; i < allPrimeUptoMax.length - 1; i++) {
        let l = allPrimeUptoMax[i];
        let r = allPrimeUptoMax[i + 1];
        let primeCount = 0;
        while (j < A.length) {
            // if the array elem is in between two consucutive allPrimeUptoMax nums
            if (A[j] >= l && A[j] < r) {
                primeCount++;
            } else {
                break;
            }
            j++;
        }
        ans += (Math.pow(2, primeCount) - 1);
        console.log(ans);

    }
    ans += (Math.pow(2, A.length - j)) - 1;
    return ans % 100000007;
}
//console.log(factoArr([2, 3, 2, 3]));

console.log(factoArr([ 2, 3, 4, 5, 6 ]));


