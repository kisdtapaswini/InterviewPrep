//Q4. Print 1 to A function
function print(A){
    if(A < 1 ){
        return 1+" ";
    }
    process.stdout.write(A+ " ");
    print(A-1);

}
//print(9);
// function callPrint(num){
//     print(num);
//     console.log();

// }
// console.log(callPrint(9));

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
    if (s < e ){ // if (s < e + 1){
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
//console.log(callRecFunction('maddam'));

//Q1. Print reverse string
function reverseString(s){
      //  process.stdout.write(s[s.length-1]);
        if(s.length === 0){
            return;
        }
        process.stdout.write(s[s.length-1]);
        return reverseString(s.substring(0, s.length-1));
}
function print(str){
    reverseString(str);
}
console.log(reverseString("cool"));
