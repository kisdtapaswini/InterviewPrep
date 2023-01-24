function findFib(A){
    if(A <= 2){
        return 1;
    }
    let left = findFib(A-1);
    let right = findFib(A-2);
    return left + right;
}
//console.log(findFib(9));

function fact(A){
    if(A === 1){
        return 1;
    }
    let facto = fact(A-1);
    return A* facto;
}
//console.log(fact(4));

function checkPalindrome(A, start, end){
    if(start === end){
        return 1;
    }
    if(A[start] != A[end]){
        return 0;
    }
    if(start < end){
        return checkPalindrome(A, i + 1, end - 1);
    }
}
function callIfPalindrome(A){
    let n = A.length;
    if(n === 0){
        return 1;
    }
    checkPalindrome(A, 0, n-1);
}
//console.log(checkPali("naman"));
function printnum(N, str){
    if(N == 1){
        str += 1;
        return;
    }
    printnum(N-1, str);
    str = str+ N;
}

function callPrintNumRec(){
    let str = '';
    printnum(5, str);
    console.log(str);
}

console.log(callPrintNumRec());
//console.log(str);
function reverseString(str, len){
    if(str.length === 0){
        console.log(str[0]);
    }
   // console.log(str[len]);
   reverseString();
}
function callReverseString(A){
    let n = A.length;
    reverseString(A, n-1);
}
//callReverseString("cool");

