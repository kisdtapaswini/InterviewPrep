function maxSlidingWindow(nums, k) {
    let startIdx = 0;
    let ans = [];
    for(let endIdx = 0; endIdx < nums.length; endIdx++){
        windowSize = endIdx - startIdx +1;
        if(windowSize === k){
            ans.push(findmax(nums, startIdx, endIdx));
            startIdx++;
        }
    }
    return ans;

}
function findmax(A, s, e){
    let max = A[s];
    for(let i = s; i <= e; i++){
        if(A[i] > max){
            max = A[i];
        }
    }
    return max;
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))