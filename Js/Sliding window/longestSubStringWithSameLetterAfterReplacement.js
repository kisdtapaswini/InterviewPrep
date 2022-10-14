function longestSUbstringReplaceKTimes(arr, k) {
    let startIdx = 0;
    let endIdx = 0;
    let map = new Map();
    let len = 0;
    let maxFreq = 0;
    for(endIdx; endIdx < arr.length; endIdx++) {
        if(map.has(arr[endIdx])){
            map.set(arr[endIdx], map.get(arr[endIdx])+1)
        }else{
            map.set(arr[endIdx], 1)
        }
        maxFreq = Math.max(maxFreq, map.get(arr[endIdx]));
       // let maxFreq = Math.max(...map.values());
        let windowSize = (endIdx-startIdx)+1;
        if( windowSize - maxFreq >k){
            startIdx += 1 
        }
        len = Math.max(len, windowSize);
    }
    return len;
}
//console.log(longestSUbstringReplaceKTimes('aabccbb', 2));
//console.log(longestSUbstringReplaceKTimes('acbccbb', 2));
console.log(longestSUbstringReplaceKTimes('abbcb', 1));
