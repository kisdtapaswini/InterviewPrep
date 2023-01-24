//Q4. Rain Water Trapped
function rainWaterTrapping(A){
    let leftMax= [];
    let rightMax = [];
    let n = A.length;
    leftMax[0] = 0;
    let totalWaterUnit = 0;
    rightMax[n-1] = 0;

    for(let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i-1], A[i-1]);
    }
    for(let i = n-2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i+1], A[i+1]);
    }
    for(let i = 0; i < n; i++){
        let val = Math.min(leftMax[i], rightMax[i]) - A[i];
        totalWaterUnit = val > 0 ? totalWaterUnit + val : totalWaterUnit;
    }
    return totalWaterUnit;

}
//console.log(rainWaterTrapping([0, 1, 0, 2]));

//Q3. Merge Overlapping A

function mergeOverlappingInterval(A){
    A.sort((a,b) => {
        return a[0] - b[0];
    })
    let S = A.map(_ => _[0]);
    let E = A.map(_ => _[1]);
    let n = A.length;
    let currStart = S[0];
    let currEnd = E[0];
    let ans = [];
    for(let i = 1; i < S.length; i++){
        if(S[i] <= currEnd){
            currEnd = Math.max(currEnd, E[i]);
        }else{
            ans.push(new Array(currStart, currEnd));
            currStart = S[i];
            currEnd = E[i];
        }
    }
    ans.push(new Array(currStart, currEnd));
    return ans;
}
console.log(mergeOverlappingInterval([[2,6], [1,3],[8,10],[15,18]]));
//console.log(mergeOverlappingInterval([[0,2], [1,4],[5,6],[6,8],[7,10],[8,9],[12,14]]));

//Q1. Merge A

function mergeInterval(A, new_interval) {
    new_interval.sort((a, b)=> a - b);
    A.push(new_interval);
    A.sort((a, b) => {
        if(a[0] == b[0])return -a[1] + b[1];
        return a[0] - b[0];
    });
    let S = A.map(_ => _[0]);
    let E = A.map(_ => _[1]);
    let n = A.length;
    let currStart = S[0];
    let currEnd = E[0];
    let ans = [];
    for(let i = 1; i < S.length; i++){
        if(S[i] <= currEnd){
            currEnd = Math.max(currEnd, E[i]);
        }else{
            ans.push(new Array(currStart, currEnd));
            currStart = S[i];
            currEnd = E[i];
        }
    }
    ans.push(new Array(currStart, currEnd));
    return ans;
}
//console.log(mergeInterval([[1, 3],[6, 9]], [2, 5]));
console.log(mergeInterval([ [1, 2], [3, 6] ], [10, 8]));


//Q2. First Missing Integer
function missingIneger(A){
    let n = A.length;
    for(let i = 0; i < n; i++){
        if(A[i] < 0){
            A[i] = n+1;
        }
    }
    for(let i = 0; i < n; i++){
        
        if(Math.abs(A[i]) <= n){
           A[Math.abs(A[i])-1] = Math.abs(A[Math.abs(A[i])-1]) * -1;
        }
    }
    for(let i = 0; i < A.length; i++){
        if(A[i] > 0){
            return i+1;
        }
    }
    return n+1;
}
//console.log(missingIneger([3, 4, -1, 1, 3, 2]));
//console.log(missingIneger([-1,-2,-3,-4]));