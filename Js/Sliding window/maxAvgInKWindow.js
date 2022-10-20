function maxAvgWithWindowk(arr, k){
    let startIdx = 0;
    let sum = 0
    let avg = 0;

    for(let endIdx = 0; endIdx < arr.length; endIdx++){
        sum += arr[endIdx];
        let windowCurrentSize = endIdx - startIdx + 1;
        if(windowCurrentSize === k){
            avg = Math.max(avg, sum /k);
            sum = sum - arr[startIdx++];
        }
    }
    return avg;
}
console.log(maxAvgWithWindowk([3,13,2,-1,6,4,5], 3));