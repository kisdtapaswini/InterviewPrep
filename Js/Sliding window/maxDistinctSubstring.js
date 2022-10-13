function maxDistinctSubString(str){
    let stratIdx = 0;
    let endIdx;
    let len = 0;
    let map = new Map();
    
    for(endIdx = 0; endIdx < str.length; endIdx++){
        if(map.has(str[endIdx])){
            stratIdx = Math.max(map.get(str[endIdx])+1, stratIdx);
        }
        map.set(str[endIdx], endIdx);
        len = Math.max(len, (endIdx - stratIdx) + 1);
    } 
    return len;
}
console.log(maxDistinctSubString("bddaab"));