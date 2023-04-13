//1. Nearest smaller value in the left
function leftNearestSmallerValue(A){
    let stack = new Array();
    let ans = new Array(A.length).fill(-1);
    A.forEach((element, index) => {
        while(stack.length > 0 && element <= stack[stack.length - 1]){
            stack.pop();
        }
        if(stack.length > 0){
            ans[index] = stack[stack.length - 1];
        }
      stack.push(element);
    });
    return ans;
}
//console.log(leftNearestSmallerValue([5, 2, 8, 10, 6, 1])); // ans
//console.log(leftNearestSmaller([ 39, 27, 11, 4, 24, 32, 32, 1 ]));
//console.log(leftNearestSmaller([4, 6, 10, 11, 7, 6, 3, 5 ]));

//1. Nearest smaller INDEX in the left

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

//3. Nearest smaller Value in the right

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
//console.log(rightNearestSmallerValue([5, 2, 8, 10, 6, 1]));

//4. Nearest smaller INDEX in the left

function rightNearestSmallerIdx(A){
    let stack = new Array();
    let n = A.length -1 ;
    let ansIdx = new Array(A.length).fill(-1);
    for(let i = n; i >= 0 ; i--){
        let element = A[i];
        while(stack.length > 0 && element <= A[stack[stack.length - 1]]){
            stack.pop();
        }

        if(stack.length > 0){
            ansIdx[n-i] = stack[stack.length - 1];
        }
        stack.push(i);
      
    }
    return ansIdx;
}
console.log(rightNearestSmallerIdx([5, 2, 8, 10, 6, 1]));

