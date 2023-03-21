// Find max distance between any two duplicate elements.

function findMaxDistance(A){
    let map = new Map();
    let ans = Number.MIN_SAFE_INTEGER;
    A.forEach((element, index) => {
        if(map.has(element)){
            ans = Math.max(Math.abs(index - map.get(element)), ans);
        }else{
            map.set(element, index);
        }
    });
    console.log(ans);

}
//console.log(findMaxDistance([1, 2, 3, 6, 1, 2, 3, 2]));

function getMaxSubsequence(A){
    let set = new Set(A);
    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < A.length; i++){
        let l = 1;
        if(!set.has(A[i]-1)){
            let k = 1;
            while(set.has(A[i]+k)){
                l++;
                k++;
            }
            ans = Math.max(l, ans);
        }
    }
    return ans;
}
//console.log(getMaxSubsequence([5,9,100,1,-1,2,3,99,98,11,101,15,102]));

//console.log(getMaxSubsequence([100,4,200,3,1,2]));
//console.log(new Set([100,4,200,3,1,2]));

//Q3. Sub-array with 0 sum

function subArrWithKSum(A){
    let pfSumArr = [];
    pfSumArr[0] = A[0];
    for(let i = 1; i < A.length; i++){
        pfSumArr[i] = pfSumArr[i-1] + A[i];
    }
    let set = new Set();
    for(let i = 0; i < pfSumArr.length; i++){
        if(set.has(pfSumArr[i]) || pfSumArr[i] === 0){
            return 1;
        }else{
            set.add(pfSumArr[i]);
        }
    }
    return 0;
}
//console.log(subArrWithKSum([-1,1]));

//Q3. Count Subarrays
function countSubArrays(A){
    let ansCount = 0;
    let i = 0;
    let j = 0;
    let set =  new Set();

    while(j < A.length){
        if(set.has(A[j])){
            set.delete(A[i]);
            i++;
        }else{
            set.add(A[j]);
            ansCount = ansCount + set.size;
            j++
        }
    }
    return ansCount;
}
//console.log(countSubArrays([2, 1, 2,5,6]));

//Q4. Flip and Find Nearest
function solve(A, B){
    let set = new Set();
    for(let i = 0; i < A.length; i++){
        if(A.charAt(i) === "1"){
            set.add(i);
        }
    }
    for(let i = 0; i < B.length; i++){
        let eachQ = B[i];
        if(eachQ[0] === 1){
            if(set.has(eachQ[1])){
                set.delete(eachQ[11]);
            }else{
                set.add(eachQ[1]);
            }
        }


    }
    console.log(set);

}
let A1 = "10010";
let B1 = [[1, 2], [2, 3]];
console.log(solve(A1, B1));