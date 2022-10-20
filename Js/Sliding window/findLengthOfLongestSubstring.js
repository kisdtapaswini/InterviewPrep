function findLengthOfLongestSubstring(str, k){
    let charsMap = new Map();
    let startIdx = 0; let result = 0;
    for (let endIdx = 0; endIdx < str.length; endIdx++) {
      if(charsMap.has(str[endIdx])){
        charsMap.set(str[endIdx], charsMap.get(str[endIdx])+1);
      }else{
        charsMap.set(str[endIdx], 1);
      }

      while(charsMap.size > k){
        let elem = charsMap.get(str[startIdx]);
        if(elem === 1){
          charsMap.delete(str[startIdx]);
        }else{
          charsMap.set(str[startIdx], elem-1);
        }
        startIdx++;
      }
        result = Math.max(result, endIdx - startIdx+1);
    }
    return result;
}

console.log(findLengthOfLongestSubstring("arraaarci", 2));