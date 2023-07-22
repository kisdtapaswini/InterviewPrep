// Stable sorting of selection sort
function selectionSort(A, k) {
    let n = A.length;
    for(let idx = 0; idx < k; idx++){
        let min = A[idx];
        let minIdx = idx;
        let repeatValIdx = idx;
        for (let i = idx+1; i < n; i++) {
            if (A[i] < min) {
                min = A[i];
                minIdx = i;
            }
            if(A[idx] === A[i]){
                repeatValIdx = i;
            }
        }
        if(repeatValIdx > minIdx){
            swap(A,minIdx, repeatValIdx)
        }
        swap(A,minIdx, idx);
    }
    return A;
}

function swap(A,idx1, idx2) {
    let temp = A[idx1];
    A[idx1] = A[idx2];
    A[idx2] = temp;
}
//console.log(selectionSort([1, 5, 2, 2, 10, 3], 6));


//BubbleSort
function BubbleSort(A) {
    let n = A.length;
    for (let idx in A) {
        let swapCount = 0;
        for (let i = 1; i < n-idx; i++) {
            if (A[i] < A[i - 1]) {
                swap(A, i, i - 1);
                swapCount++;
            }
        }
        if (swapCount === 0) {
            break;
        }
    }
    return A;
}
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
//console.log(BubbleSort([9, 3, 8, 6, 7, 2, 11, 4, 5]));

// merge two Sorted Arr

