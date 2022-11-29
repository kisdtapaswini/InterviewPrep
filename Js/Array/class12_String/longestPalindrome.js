function findLongestPalindrome(A){
    let n = A.length;
    let max = 0;
    let ptsArr;
    let maxStr = '';
    //Odd  length Palindorme
    for(let i = 0; i < n; i++){
        ptsArr = expand(A, i, i);
        let len = ptsArr[1] - ptsArr[0] -1;
        if(len > max){
            max = len;
            maxStr = getTheString(A, ptsArr[0], ptsArr[1]);
        }       
    }

    // for even palindomr
    for(let i = 0; i < n -1; i++){
        ptsArr = expand(A, i, i+1);
        let len = ptsArr[1] - ptsArr[0] -1;
        if(len > max){
            max = len;
            maxStr = getTheString(A, ptsArr[0], ptsArr[1]);
        }
    }
    return maxStr;
}
function expand(chArr, p1, p2) {
    let pts = [];
    while(p1 >= 0 && p2 < chArr.length && chArr[p1] === chArr[p2]){
        p1--;
        p2++;
    }
    pts.push(p1);
    pts.push(p2);
    return pts;
}

function getTheString(chArr, pt1, pt2){
    let str = '';
    for(let i = pt1+1; i < pt2; i++){
        str += chArr[i];
    }
    return str;
}
//console.log(findLongestPalindrome("bb"));

console.log(findLongestPalindrome("aaaabaaa"));















// function findLongestPalindrome(A){
//     let freqArr = new Array(26).fill(0);
//     console.log(freqArr);
//     for(let i = 0; i < A.length; i++){
//         freArr[]
//     }

// }
// console.log(findLongestPalindrome("aaaabaaa"));