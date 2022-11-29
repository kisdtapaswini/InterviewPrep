/**
 * To lower
 */
function toLower(A){
    let ans = '';
    for(let i = 0; i < A.length; i++){
        ans += String.fromCharCode(A[i].charCodeAt(0) ^ 32);
    }
    return ans;
}
// console.log(toLower("FbxdWdoKwrezJPP"));

function countSort (A){
    let min = A[0];
    let max = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] >= max){
            max = A[i];
        }else{
            min = A[i];
        }
    }
  //  console.log(min +" : "+max);
    let freqArr = {};
    for(let i = min; i <= max; i++){
        freqArr[i] = 0;
    }
    for(let i = 0; i < A.length; i++){
        freqArr[A[i]]++;
    }

    let resuArr = [];
    for(let i = min; i <= max; i++){
        while(freqArr[i] >0){
            resuArr.push(i);
            freqArr[i]--;
        }
    }
    return resuArr;
}
//console.log(countSort([3, 1, 3]));
/**
 * Simple Reverse a string
 */

function reverseStr(A){
    let strArr = A.split(" ");
    let resArr = [];
    for(let i = strArr.length-1; i >= 0; i--){
        resArr.push(strArr[i]);
    }
    return resArr.join(" ");
}
console.log(reverseStr("scaler is best"));