function maxAvgWithWindowk(arr, k){
    let startIdx = 0;
    let sum = 0
    let avg = Number.MAX_VALUE;
    let i = 0;
    for(let endIdx = 0; endIdx < arr.length; endIdx++){
        sum += arr[endIdx];
        let windowCurrentSize = endIdx - startIdx + 1;
        if(windowCurrentSize === k){
            if(sum /k < avg){
                avg = sum/k;
                i = startIdx;
            }
         //   avg = Math.min(avg, sum /k);
            sum = sum - arr[startIdx++];
        }
    }
    return i;
}
console.log(maxAvgWithWindowk([ 18, 11, 16, 19, 11, 9, 8, 15, 3, 10, 9, 20, 1, 19 ], 1));