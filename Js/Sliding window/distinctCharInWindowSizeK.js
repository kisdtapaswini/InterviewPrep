function distinctChar (str, k) {
    let startIdx = 0;
    let mp = new Map();
    let i;
    let j

    for(let endIdx = 0; endIdx < str.length; endIdx++) {
        if(mp.has(str[endIdx])) {
            mp.set(str[endIdx] , mp.get(str[endIdx])+1)
        }else{
            mp.set(str[endIdx], 1);
        }

        let windowSize = endIdx - startIdx +1;
        if(windowSize === k){
            if(checkIfMapHasRepeatElem(mp)){
                i = startIdx;
                j = endIdx;
                return [i, j];
            }else{
                mp.delete(str[startIdx]);
            }
            startIdx ++;
        }
    }
    // itterate map
    // for (const [key, value] of mp.entries()) {
    //     console.log(key, value);
    //   }
}
function checkIfMapHasRepeatElem(mp){
    for (const [key, value] of mp.entries()) {
        if(value > 1){
            return false;
        }
      }
      return true;
}
console.log(distinctChar('xyyzxyyz', 3));