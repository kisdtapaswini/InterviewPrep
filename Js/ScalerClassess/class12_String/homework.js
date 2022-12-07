
//Q1. Longest Common Prefix

function longestCmnPrefix(A){
    let prefixArr = [];
    prefixArr[0] = A[0];
    for(let i = 1; i < A.length; i++){
        prefixArr[i] = findCommon(prefixArr[i-1], A[i]);
    }

   return prefixArr[prefixArr.length -1];

}
function findCommon(a, b){
    let n = a.length < b.length ? a.length : b.length;
    let cmn = '';
    for(let i =0; i< n; i++){
        if(a[i] === b[i]){
            cmn += a[i];
        }
    }
    return cmn;
}
//console.log(longestCmnPrefix(["abcdefgh", "abcdefghijk", "abcefgh"]));
//console.log(longestCmnPrefix([ "aaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ]
//));

/**
 * 
 */
//Q2. Isalnum()
function isAlNum(A){
    for(let i = 0; i < A.length; i++){
        if(!(A[i] >= 'A' && A[i] <='Z') &&
        !(A[i] >= 'a' && A[i] <='z') &&
        !(A[i] >= '0' && A[i] <='9')){
             return 0
         }

    }
    return 1;

}
//console.log(isAlNum(['S', 'c', 'a', 'l', 'e', 'r', 'A', 'c', 'a', 'd', 'e', 'm', 'y', '2', '0', '2', '0', '%']));


// Q3. String operations
function stringOp(A){
  //  let n = A.length;
  //  A = A.replace( /[A-Z]/g, '' );
   // A = A.replace( /[A-Z]/g, '' );
    let ans = '';
    for(let i = 0; i < A.length; i++){
        if(!(A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) <= 90)){
            ans += A[i];
        }
    }
    console.log(ans);
    for(let i = 0; i < ans.length; i++){
        if(ans[i] === 'a' || ans[i] === 'e' || ans[i] === 'i' || ans[i] === 'o' || ans[i] === 'u' ){
            ans = ans.replace(ans[i], '#');
        }
    }
    return ans+ans;
}
console.log(stringOp("hgUe"));
