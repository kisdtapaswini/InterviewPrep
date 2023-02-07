function countingSort(A){
    let maxVal = Math.max(...A.map(_=>Number(_)));
    let k = maxVal + 1;
    let arrFreq = new Array(k).fill(0);
    for(let i = 0; i < A.length; i++){
        arrFreq[A[i]]++;
    }
    let x = 0;
    for(let i = 0; i < arrFreq.length;i++){
        for(let j = 0; j < arrFreq[i]; j++){
            if(arrFreq[i] != 0){
                A[x++] = i;
            }
        }
    }
    return A;
}
console.log(countingSort([1, 3, 1]));
