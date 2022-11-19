/**
 * Given an array of 1s and 0s. We can replace one of the 0s with a 1. 
 * Return the count of max consecutive 1s. in the array.
 */
// Brute Force
function findMaxNumberOf1(arr){

    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        let l = 0;
        let r = 0;
        if(arr[i] === 0) {
            let k = i ===0 ? 0 : i-1;
            while(arr[k] === 1){
                l++;
                k--;
            }

            let j = i+1;
            while(arr[j] === 1){
                r++;
                j++;
            }

            // console.log(l +" : "+r);
            // console.log(" --------------- ");

            if((l + r + 1) > ans){
                ans = l + r + 1;
            }
        }

    } 
    return ans;

}
console.log(findMaxNumberOf1([0,1,1,1,0,1,1,0,1,1,0]));
