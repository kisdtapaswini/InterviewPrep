function TensDigitSorting(A){
 //   A = A.map(_ => parseInt(_))
    let n = A.length;
    let tensArr = new Array(n);
    for(let i = 0 ; i < n; i++){
      tensArr[i] = { 'val': A[i], 
         'digit': findDigits(i, A)
         }; 
    }
    console.log(tensArr);
    tensArr.sort((e1, e2) => {
        if(e1.digit === e2.digit){
          return e1.val < e2.val ? -1 : 1;
        }else{
          return e1.digit < e2.digit ? -1 : 1;
        }
    });
    let ans = [];
    for (let i = 0; i < n; i++) {
      ans.push(tensArr[i].val);
    }
     return ans;

}
function findDigits(j, arr){
    return parseInt(arr[j]/10)%10;

}

//console.log(TensDigitSorting([15, 11, 7, 19]));
console.log(TensDigitSorting([ 36, 13, 13, 26, 37, 28, 27, 43, 7 ]));