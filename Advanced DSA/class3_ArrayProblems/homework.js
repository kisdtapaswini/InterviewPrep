//
function findMaxPermutation(A){
    let i = A.length -2;
    while(A[i] > A[i+1]){
        i--;
    }

    if(i > 0){
        let j = A.length-1;
        while(A[j] < A[i]){
            j--;
        }
        swap(i,j, A);

        return A;
    }
      //  reverse(A);
        reverse(A,i+1);

        return A;
    
}
function swap(idx1, idx2, arr){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function reverse(A, start) {
    let i =start, j = A.length-1;
    while (i < j ) {
        swap(i, j, A);
        i++;
        j--;
    }
}
console.log(findMaxPermutation([1,4,9,7,3]));
console.log(findMaxPermutation([3, 2, 1]));