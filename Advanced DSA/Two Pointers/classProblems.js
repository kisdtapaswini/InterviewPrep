// 1. Check if there exists a pair A[i] + A[j] = k and i!= j, in a sorted(Ascending) array
function isPairExists(A, k){
    let i = 0;
    let  j = A.length - 1;
    while(i < j){
        let sum = A[i] + A[j];
        if(sum === k){
           return true;
        }else if(sum < k){
            i++;
        }else{
            j--;
        }
    }
    return false

} 
//console.log(isPairExists([3, 6, 7, 8, 8, 12, 19], 13));

// 2. Check if there exists a pair A[i] - A[j] = k and i!= j, in a sorted(Ascending) array
function isPairExists2(A, k){
    let j = 0;
    let i = 1;
    while(i < A.length){
       let diff = A[i] - A[j];
       if(diff === k){
            return true;
       }
       else if(diff < k){
        i++;
       }else{
        j++;
        if(i === j){
            i++;
        }
       }
    }
    return false;
}
console.log(isPairExists2([-3, 0, 1, 3, 6, 8, 11, 14, 21, 25], 100));
