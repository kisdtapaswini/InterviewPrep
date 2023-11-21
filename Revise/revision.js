function checkIfPali(str, start, end){
    if(start >= end){
        return true;
    }

    if(str[start] != str[end]){
        return false;
    }
    else{
        return checkIfPali(str, ++start, --end)
    }
    

}
let A = "namand";
let i = 0;
let j = A.length - 1;
console.log(checkIfPali(A, i, j));