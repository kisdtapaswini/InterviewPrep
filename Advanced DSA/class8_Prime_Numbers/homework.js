// Find the smallest prime factor(SPF) of any number

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


//14. Longest Common Prefix
function longestCom(strs){
    let ans = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        let nextStr =  strs[i];
        let contString = '';
        while(j < Math.min(ans.length,nextStr.length)){
            if(ans[j] === nextStr[j]){
                contString += ans[j];
            }else{
                break;
            }
            j++;

        }
        ans = contString;
    }
    return ans;
}
//console.log(longestCom(["cir","car"]));

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
    console.log(convertToTitle(55));

