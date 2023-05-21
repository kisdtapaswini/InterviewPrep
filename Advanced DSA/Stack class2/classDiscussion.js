
function leftNearestSmallerIndex(A){
    let stack = new Array();
    let ansIdx = new Array(A.length).fill(-1);
    A.forEach((element, idx) => {
        while(stack.length > 0 && element <= A[stack[stack.length - 1]]){
            stack.pop();
        }

        if(stack.length > 0){
            ansIdx[idx] = stack[stack.length - 1];
        }
        stack.push(idx);
      
    });
    return ansIdx;
}
//console.log(leftNearestSmallerIndex([4, 6, 10, 11, 7, 6, 3, 5 ])); 
// ans : [-1, 0,  1, 2, 1, 0, -1, 6]

//2. Nearest smaller in the right

function rightNearestSmallerValue(A){
    let stack = new Array();
    let ans = new Array(A.length).fill(-1);
    let n = A.length -1 ;
    for(let i = n; i >= 0 ; i--){
        let element = A[i];
        while(stack.length > 0 && element <= stack[stack.length - 1]){
            stack.pop();
        }
        if(stack.length > 0){
            ans[n-i] = stack[stack.length - 1];
        }
      stack.push(element);
    }
    return ans;
}
console.log(rightNearestSmallerValue([5, 2, 8, 10, 6, 1]));

//3. Nearest Larger in the left
function leftNearestLarger(A){
    let stack = new Array();
    let ans = new Array(A.length).fill(-1);
    A.forEach((element, index) => {
        while(stack.length > 0 && element >= stack[stack.length - 1]){
            stack.pop();
        }
        if(stack.length > 0){
            ans[index] = stack[stack.length - 1];
        }
      stack.push(element);
    });
    return ans;
}
//console.log(leftNearestLarger([5, 2, 8, 10, 6, 1]));

//4. Nearest smaller in the right

function rightNearestLarger(A){
    let stack = new Array();
    let top = -1;
    let ans = [];
    let ansIdx = []
    let n = A.length - 1;
    for(let i = n; i >= 0 ; i--){
        let element = A[i];
        if(element >= stack[top]){
            while(top !== -1 && element >= stack[top]){
                top--;
            }
          }
          ans[n-i] = top === -1 ? top : stack[top];  
          ansIdx[n-i] = top === -1 ? A.length : top;
          top++;
          stack[top] = element;
    }
    return ansIdx;
}
//console.log(rightNearestLarger([5, 2, 8, 10, 6, 1]));
//5. Find sum of (max - min) for all subarray

function findMaxMinusMinSubArray(A){
    let leftSmaller = leftNearestSmaller(A);
    let rightSmaller = rightNearestSmaller(A);
    let leftLarger = leftNearestLarger(A); 
    let rightLarger = rightNearestLarger(A);
     console.log(leftSmaller);
    // console.log(rightSmaller);

    // console.log(leftLarger);

    // console.log(rightLarger);

    let sumMin = 0;
    let sumMax = 0;
    A.forEach((element, index)=>{
        sumMax += Math.abs(index - leftSmaller[index]) * Math.abs(rightSmaller[index] - index) * element;
        sumMin += Math.abs(index - leftLarger[index]) * Math.abs(rightLarger[index] - index) * element;
    });
  // console.log(sumMax, sumMin);
   return sumMax - sumMin;
}
//console.log(findMaxMinusMinSubArray([4, 7, 3, 8]));
//console.log(findMaxMinusMinSubArray([2, 5, 3]));


