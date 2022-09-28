(function findMinSum(arr, givenSum) {
    let startIdx = 0;
    let endIdx;
    let i, j;
    windowSum = 0;
    for (endIdx = 0; endIdx < arr.length; endIdx++) {
        windowSum += arr[endIdx];
        if (givenSum > windowSum) {

            windowSum = windowSum - arr[startIdx++];
        }
    }
    console.log(minSum);
    return [i, j];

})([1, 6, 3, 7, 5], 12);

function main() {
    // Write your code here
    // Use console.log to output the result
    let i = 0;
    let N = parseInt(inputString[i++]);
    let M = parseInt(inputString[i++]);
    while (M > 0) {
        let input = inputString[i++];

        if (input !== "" && input !== " " && input) {


            let K = input.split(' ');
            let op = parseInt(K[0]);
            let opVal = parseInt(K[1]);
            if (op === 1) {
                N += opVal;
            } else {
                if (opVal > N) {
                    console.log("Insufficient Funds");
                    continue;
                } else {
                    N -= opVal;
                }
            }
            console.log(N);
        }
        M--;
    }


}