//Q4. Print 1 to A function
function print(A){
    if(A < 0){
        return 1+" ";
    }
    print(A-1);
    process.stdout.write(A+ " ");

}
//console.log(print(9));

//printNos(1, 100);
     
function printNos(A)
{
    // if (initial <= last) {
    //    console.log(initial + " ");
    //     printNos(initial + 1, last);
    // }
    let ans = '';
    if(A===1){
        return 1;
    }
    return A*printNos(A-1);
}
//console.log(printNos(5));

//Q3. Check Palindrome
function checkPalindrome(str){
    // let mid = Math.floor(str.length/2);
    // let start = mid - 1;
    // let end  = mid+1;
    // while(start >= 0 || end < str.length){
    //     if(str[start] !== str[end]){
    //         return 0;
    //     }
    //     start--;
    //     end++;
    // }
    // return 1;

    // let start = 0;
    // let end  = str.length-1;
    // while(start < end){
    //     if(str[start] !== str[end]){
    //         return 0;
    //     }
    //     start++;
    //     end--;
    // }
    // return 1;



}
function checkPalindromeRec(str, s, e){
    if(s === e){
        return 1;
    }
    if ((str.charAt(s)) != (str.charAt(e))){
        return 0;
    }
    if (s < e + 1){
        return checkPalindromeRec(str, s+1, e-1)
    }
    return 1;
}
function callRecFunction(str){
    var n = str.length;
    if (n == 0){
        return 1;
    }

    return checkPalindromeRec(str, 0, n - 1);
}
console.log(callRecFunction('maddam'));