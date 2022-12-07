function findLongestSubString(str){
    let startIdx = 0;
    let len = 1;
    let map = new Map();

    for(let endIdx = 0; endIdx < str.length; endIdx++){
        windowSize = endIdx - startIdx+1;
        console.log(str.substring(startIdx, endIdx+1));
        let i = startIdx;
        while(i < endIdx){
            if(str[i] === str[endIdx]){
                startIdx = Math.max(i , startIdx);
                break;
            }//else{
              //  len = Math.max(len, windowSize);
           // }
            i++;
        }
        
    }
    return len;
}
console.log(findLongestSubString("abcabcbb"));