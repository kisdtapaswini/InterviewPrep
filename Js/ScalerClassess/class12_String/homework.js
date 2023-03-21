
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
//console.log(stringOp("hgUe"));


// Q6. Check anagrams
function checkAnagram(A, B){
    let map = new Map();
    for (let i = 0; i < A.length; i++){
        if(map.has(A[i])){
            map.set(A[i], map.get(A[i])+1);
        }else{
            map.set(A[i],1);
        }

    }

    for (let i = 0; i < B.length; i++){
        if(map.has(B[i])){
            let elem = map.get(B[i]);
            if(elem === 1){
             map.delete(B[i]);
            }else{
             map.set(B[i], elem-1);
            }
        } else{
            return 0;
        }
     //   console.log(map);

    }

    return map.size == 0 ? 1 : 0;
}
//console.log(checkAnagram("wwezdaudbq", "dezwbdaqwu"));

//Q7. Add Binary Strings

function addBinaryString(A, B){
    let result = '';
    let lenA = A.length;
    let lenB = B.length;
    let max = Math.max(lenA, lenB);
    let sum = 0;
    let carry = 0;
    for(let i = 0; i < max; i++){
        sum = Number(A[lenA-1-i] || 0) + Number( B[lenB-1-i]|| 0) + carry;
        console.log(sum);
        carry = Math.floor(sum / 2);
        result = sum%2 + result;
    }

    return carry ? "1"+result : result;

}
//console.log(addBinaryString("110", "10"));
//Q4. Change character
function changeChar(A, B){
    let map = new Map();
    for(let i = 0; i < A.length; i++){
        if(map.has(A[i])){
            map.set(A[i], map.get(A[i]) + 1);
        }
        else{
            map.set(A[i], 1);
        }
    }
    map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
       console.log( map);

    for (let entry of map.entries()) {
        if(entry[1] <= B){
            B -= entry[1];
            map.delete(entry[0]);
        }
    }
    return map.size;
}
function getminMap(mp){
    var minkey = Object.keys(mp)[0];
    var minValue = mp[Object.keys(mp)[0]];
    console.log(minValue);
    for (var key in mp) {
        if (mp.hasOwnProperty(key)) {
            if(mp[key] < minValue){
               minValue = mp[key];
               minkey = key;
            }
        }
    }
    return minkey;
}
//console.log(changeChar("abcabbccd", 3));

