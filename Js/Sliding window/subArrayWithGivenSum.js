function subArrayWithGivenSum(arr, givenSum){
    let startIdx = 0;
    let windowSum = 0;
    for(let endIdx=0; endIdx< arr.length; endIdx++){
        windowSum += arr[endIdx];
        while(windowSum > givenSum){
            windowSum = windowSum - arr[startIdx++];
        }
        if(windowSum === givenSum){
            return [startIdx, endIdx];
        }
    }
    return 'not found';
}
console.log(subArrayWithGivenSum([1,2,3,7,5], 100));