function maxOccuranceCount(arr, B) {
    let startId = 0
    let ans = 0;
    let count  = 0;
    let str = ''
    let countBob = 'b'.charCodeAt(0) + 'o'.charCodeAt(0) +'b'.charCodeAt(0) ;
    for(let endIdx = 0; endIdx < arr.length; endIdx++){
        windowSize = (endIdx - startId) +1;
        ans += arr[endIdx].charCodeAt(0);
        if(windowSize === B.length){
            if(ans === countBob){
                str = arr.slice(startId, endIdx+1);
                if(str === 'bob'){
                    count++;
                }

            }

            ans -= arr[startId++].charCodeAt(0);
        }
    }
    return count;
}
 console.log(maxOccuranceCount('rbobbob', 'bob'));