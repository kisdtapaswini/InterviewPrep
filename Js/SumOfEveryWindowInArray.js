function sumOfWindow(arr, k) {
    let startIdx = 0;
    let currentSum = 0;
    let resultArr = [];
    for (let currentIdx = 0; currentIdx < arr.length; currentIdx++) {
        currentSum += arr[currentIdx];
        if ((currentIdx - startIdx) + 1 == k) {
            resultArr.push(currentSum);
            currentSum = currentSum - arr[startIdx++];
        }

    }


    console.log(resultArr);
    return resultArr;

}
sumOfWindow([1, 9, 3, 7, 5], 3);