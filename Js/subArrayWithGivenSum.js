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
    console.log('nt found');
    return 'not found';

})([1, 6, 7, 3, 5], 12);


// consider we have prime number, composite number and special number
// and their definition are
// prime number: exactly two factors(2, 3, 5, 7....)
// composite number: product of prime numbers(4, 6, 8..)
// special number: exactly one factor(1) unfortunately we do not have term called special number.
//     thats why, we are saying 1 is neither prime and nor composite.