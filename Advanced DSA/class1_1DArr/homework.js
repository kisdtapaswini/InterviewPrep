//Q1. Add One To Number
function addToOne(A){
    for(let i = A.length - 1; i >= 0; i--) {//[3, 2, 1]
        let val = A[i];
        val +=1;
        if(val === 10){
            A[i] = 0;
            if(i === 0){
                A.unshift(1);
            }
        }  else{
            A[i] = val;
            while(A[0] === 0){
                A.shift();
            }
            return A;
        }
    }
    return A;
}
//console.log(addToOne([9, 9, 9]));

// Q2. Flip
function Flip(A){
    let start = 0;
    let end = 0;
    let count = 0;
    let length = 0
    let ans = [];
    for(let i = 0; i < A.length; i++){

        if(A[i] == 0){
            count++;
        }else{
            count--;
        }

        if(length < count){
            length = count;
            ans[1] = i + 1;
            ans[0] = start + 1;
        }
        if(count < 0){
            count = 0;
            start = i+1;
        }

    }
    if(length === 0){
        return [];
    }
    return ans;

}
//console.log(Flip("1101"));
function Flip2(A){
    let preProcessedArr = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] == 0){
            preProcessedArr.push(1);
        }else{
            preProcessedArr.push(-1);
        }
    }
    let currSum = preProcessedArr[0];
    let maxSum = preProcessedArr[0];
    let start = 0;
    let ans = [];
    for(let i = 1; i < preProcessedArr.length; i++){
        currSum = currSum + preProcessedArr[i];
        if(currSum > maxSum){
            maxSum = currSum;
            ans[1] = i+1;
            ans[0] = start + 1;
          }
        if(currSum < 0){
            currSum = 0;
            start = i;
        }
    }
    if(currSum < 0){
        return [];
    }
    return ans;
}
console.log(Flip2("101"));
