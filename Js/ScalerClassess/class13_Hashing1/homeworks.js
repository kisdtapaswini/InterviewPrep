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
//console.log(countSubarrayWithZerSum([30, -30, 30, -30]));
//console.log(countSubarrayWithZerSum([0]));
//Q3. Colorful Number
function colorfulNum(A){
    let digitArr = [];
    while(A != 0){
        digitArr.push(A % 10);
        A = Math.floor(A/10);
    }
    let set = new Set();
    for(let i = 0; i < digitArr.length; i++){
        let prod = 1;

        for(let j= i; j < digitArr.length; j++){
            prod *= digitArr[j];
            if(set.has(prod)){
                return 0;
            }
            set.add(prod);
        }
    }
    return 1;

}
//console.log(colorfulNum(236));
