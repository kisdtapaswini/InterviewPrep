function findDistinct(A,B){
    let ans = [];
    let startIdx = 0;
    let map = new Map();
    for(let endIdx = 0; endIdx < A.length; endIdx++){
        let windowSize = endIdx - startIdx + 1;
        if(map.has(A[endIdx])) {
            map.set(A[endIdx] , map.get(A[endIdx])+1)
        }else{
            map.set(A[endIdx], 1);
        }
        if(windowSize === B){
            let count = 0
            // for (const [key, value] of map.entries()) {
            //         count++;
            //   }
              ans.push(map.size);
            let elem = map.get(A[startIdx]);
            if(elem === 1){
              map.delete(A[startIdx]);
            }else{
              map.set(A[startIdx], elem-1);
            }
            startIdx ++;
        }
    }
    return ans;
    
}
console.log(findDistinct([1, 2, 1, 3, 4, 3], 3));
//console.log(findDistinct([1, 1, 2, 2], 1));