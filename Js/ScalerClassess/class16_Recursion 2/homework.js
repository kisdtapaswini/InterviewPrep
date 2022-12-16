//Q1. Is magic?

function isMagic(A){
    if(A == 0){
        return A;
    }
    return (A%10) + isMagic(parseInt(A/10));

}
function findIfMaigic(A){
    if(A <= 9){
       return A;
    }
    return findIfMaigic (isMagic(A));
}
function isMa(){
    if(findIfMaigic(83557) === 1){
        return 1;
    }else{
        return 0;
    }
}
//console.log(isMa(1291));

//Q2. Kth Symbol - Easy

function findAllRows(A){
    if(A === 1){
        let arr = new Array(1).fill(0);
        return arr;
    }
    let arr1 = findAllRows(A-1);
    let finalArr = new Array();
    for(let i = 0; i< arr1.length; i++){
        if(arr1[i] == 0){
            finalArr.push(0);
            finalArr.push(1);
        }else{
            finalArr.push(1);
            finalArr.push(0);  
        }
    }
    return finalArr;
}
function findAns(A, B){
    let ans = findAllRows(A);
    return ans[B];
}
//console.log(findAns(3, 0));
//console.log(findAns(4, 4));

//Q3. Kth Symbol - Hard

function josh(A, B,index){
    if (A.length == 1) {
        return A[0];
    }
    index = ((index + B) % A.length);

    if (index > -1) {
        A.splice(index, 1);
    }

    return josh(A, B, index);

}
function solve(A, B){
    B--; // (k-1)th person will be killed

    let person = [];

    // fill the person vector
    for (var i = 1; i <= A; i++) {
        person.push(i);
    }
    let index = 0 ;
   return josh(person, B, index);
}
console.log(solve(4, 2));