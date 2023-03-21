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

// From revision ------------------------------------

///1. Print a string in reverse order
function printReversedString(text, len){
    if(len < 0){
        return
    }
    console.log(text[len]);
    printReversedString(text, len-1);
}
//printReversedString("abcde", 4);

//2. Find the 1st and last occurance of an element

function findOcc(text, obj, ch, idx){
    if(idx >= text.length ){
        return;
    }

    if(text[idx] === ch){
        if(obj.f === -1 ){
            obj.f = idx;
        }else{
            obj.l = idx;
        }
    }
    findOcc(text, obj, ch, idx+1);
}
let str = "abaacdaefaah";
let obj = {
    f: -1,
    l: -1
}
let f = -1;
let l = -1;
//findOcc(str, obj, 'a', 0);
//console.log(obj);

//3. check if an array is sorted(strictly increasing order)

function ifSorted(arr, idx){
    if(idx < arr.length - 1 && arr[idx] >= arr[idx+1]){
        return false;
    }
    if(idx === arr.length-1){
        return true
    }
   
    return ifSorted(arr, idx+1);

}
//console.log(ifSorted([1,2,3,4,5], 0));

//4. Move all 'x' to the end of the string

function moveAllX(str, ans, countX, idx){
    if(str[idx] === "x"){
        countX++;  
    }else{
        ans.val += str[idx];
    }
    if(idx >= str.length-1){
        while(countX != 0){
            ans.val +="X";
            countX--;
        }
        return;
    }
    moveAllX(str, ans, countX, idx+1);
}
let ans = {
    val: ''
}
//console.log(moveAllX("axbcxxd", ans, 0, 0));
//console.log(ans.val);

//5. Remove duplicate from an string

function removeDupliInAString(str1, ans2, idx, set){
        if(!set.has(str1[idx])){
            ans2.val += str1[idx];
            set.add(str1[idx]);
        }
        if(idx >= str1.length-1){
            return;
        }
        removeDupliInAString(str1, ans2, idx+1, set);
}
let str1 = "abbccda";
let ans1= {
    val: ""
}
let set = new Set();
//removeDupliInAString(str1, ans1, 0, set);
//console.log(ans1);

//6. Print all the subsequences of a string

function subsequencesPrint(){

}
subsequencesPrint("abc");


