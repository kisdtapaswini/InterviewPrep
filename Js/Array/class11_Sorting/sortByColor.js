/**
 * Approach 1
 * @param {*} A 
 * @returns 
 */
function sortByColor(A){
    let redCount = 0;
    let whiteCount = 0
    let blueCount = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] == 0){
            redCount++
        }else if(A[i] == 1){
            whiteCount++;
        }else{
            blueCount++;
        }
    }
    for(let i = 0; i < A.length; i++){
        if(i < redCount){
            A[i] = 0;
        }else if(i < redCount+whiteCount){
            A[i] = 1;
        }else{
            A[i] = 2;
        }
    }
    return A;
}
//console.log(sortByColor([0,1,2,0,1,2]));
/**
 * Approach -2
 * Swap the 0s to the start of the array maintaining a pointer, and 2s to the end of the array.
1s will automatically be in their right position.
 */
 function sortByColor2(A){
    let idx = 0
    for(let i = 0; i < A.length; i++){
        if(A[i] == 0) {
            let temp = A[i];
            A[i] = A [idx];
            A[idx] = temp;
            idx++;
        }
        console.log(idx);
   }
    return A;
 }
 console.log(sortByColor2([1,0,2,1,0,2]));
