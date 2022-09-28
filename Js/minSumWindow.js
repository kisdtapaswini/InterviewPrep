(function findMinSum(arr, k) {
    let startIdx = 0;
    let endIdx;
    let i, j;
    let minSum = Number.MAX_VALUE;
    windowSum = 0;
    for (endIdx = 0; endIdx < arr.length; endIdx++) {
        windowSum += arr[endIdx];
        if ((endIdx - startIdx) + 1 === k) {
            if (windowSum < minSum) {
                i = startIdx;
                j = endIdx;
                minSum = windowSum;
            }
            windowSum = windowSum - arr[startIdx++];
        }
    }
    console.log([i, j]);
    return [i, j];

})([1, 6, 3, 7, 5], 3);