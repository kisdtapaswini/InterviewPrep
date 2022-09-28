(function findMinSum(arr, givenSum) {
    let startIdx = 0;
    let endIdx;
    windowSum = 0;
    for (endIdx = 0; endIdx < arr.length; endIdx++) {
        windowSum += arr[endIdx];
        while (givenSum < windowSum) {
            windowSum = windowSum - arr[startIdx++];
        }
        if (windowSum === givenSum) {
            console.log(startIdx, endIdx);
            return [startIdx, endIdx];
        }
    }

})([1, 6, 3, 7, 5], 12);