// Count Subarray Zero Sum

function countSubarrayWithZerSum(A){
    let pfArr = [];
    pfArr[0] = A[0];
    let ans = 0;
    for(let i = 1; i < A.length; i++){
        pfArr[i] = pfArr[i - 1] + A[i];
    }
   // console.log(pfArr);
    let map = new Map();
    for(let i = 0; i < pfArr.length; i++){
        if(map.has(pfArr[i])){
            map.set(pfArr[i], map.get(pfArr[i])+1);
        }else{
            map.set(pfArr[i], 0);
        }
    }
    console.log(map);

    // if(map.has(0)){
    //     ans = map.get(0);
    // }
   // console.log(ans);

    for (let entry of map.entries()) {
        if(entry[1] >= 2){
            ans += entry[1];
        }

    }
    return ans;

}
console.log(countSubarrayWithZerSum([30, -30, 30, -30]));
//console.log(countSubarrayWithZerSum([0]));