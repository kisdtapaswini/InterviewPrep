function maxOccuranceCount(arr, B) {
    let startId = 0
    let count = 0;
    let str = '';
    for(let endIdx = 0; endIdx < arr.length; endIdx++){
        windowSize = (endIdx - startId) +1;
        str += arr[endIdx];
        if(windowSize === B.length){
            if(str === B){
                count++;
                startId = endIdx -1
            }else{
                startId++;
            }
        }

    }
    return count;
}
 console.log(maxOccuranceCount('abobc', 'bob'));