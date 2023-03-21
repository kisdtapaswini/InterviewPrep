//21. Merge Two Sorted Lists

function mergeSorted(nums1, m, nums2, n) {
    let resArr = [];
    let p2 = 0;
    let j = 0;
    while( p2 < m && j < n){
        if(nums1[p2] < nums2[j]){
            p2++;
        }else{
            resArr.push(nums2[j]);
            j++;
        }
    }
        while(p2 < m){
            resArr.push(nums1[p2]);
            p2++;
        }
         while(j < n){
            resArr.push(nums2[j]);
            j++;
        } 
    nums1 = [...resArr];
    return nums1;
}
//console.log(mergeSorted([1,2,3,0,0,0], 3, [2,5,6], 3));
//console.log(mergeSorted([1], 1, [], 0));

//14. Longest Common Prefix
function longestCom(strs){
    let ans = strs[0];
    for(let p2 = 1; p2 < strs.length; p2++){
        let j = 0;
        let nextStr =  strs[p2];
        let contString = '';
        while(j < Math.min(ans.length,nextStr.length)){
            if(ans[j] === nextStr[j]){
                contString += ans[j];
            }else{
                break;
            }
            j++;

        }
        ans = contString;
    }
    return ans;
}
//console.log(longestCom(["cir","car"]));

//26. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
    let n = nums.length;
    if(n === 0 || n ===1){
        return nums;
    }
    let p1 = 0;
    for(let p2 = 1; p2 < n; p2++){
        if(nums[p1] !== nums[p2]){
            p1++;
            nums[p1] = nums[p2];
        }
    }
    return nums.slice(0, p1+1); // slice method end param is the end position (up to, but not including).

   //return nums;
}
//console.log(removeDuplicates([1,1,2]));
//console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

//Rearrange Array

function solve(A){
    let mul = Math.max(...A)+1;
    for(let i = 0; i < A.length; i++){
        let val = A[i] + mul * (A[A[i]] % mul);
        A[i] = val;
    }
    for(let i = 0; i < A.length; i++){
        A[i] = parseInt(A[i] / mul);
    }
    console.log(A);
}
   // solve([4, 0, 2, 1, 3]);

   function kthsmallest(A, B){
        if(A.length ==1 && B == 1){
            return A[0];
        }
        let len = A.length;
        for(let i = 0; i < len; i++){
            let minVal= A[i];
            let minIdx = 0;
            for(let j = i; j < len; j++){
                if(A[j] < minVal){
                    minIdx = j;
                    minVal = A[j];
                }
            }
            swap(A, i, minIdx );
            console.log(A);

        }
        console.log(A[B-1]);

        return A[B-1];
	}
    function swap(arr, idx1, idx2){
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    //kthsmallest([ 94, 87, 100, 11, 23, 98, 17, 35, 43, 66, 34, 53, 72, 80, 5, 34, 64, 71, 9, 16, 41, 66, 96 ], 19);

    function findMaj(A){
        let count = 0;
        let maj = -1;
        for(let i = 0; i < A.length; i++){
            if(A[i] === maj || maj == -1){
                maj = A[i];
                count++;
            }else{
                count--;
                if(count === 0){
                    maj = -1;
                }
            }
        }
        return maj;

    }
    //console.log(findMaj([2,2,1,1,1,2,2]));

    //202. Happy Number
    function happyorNt(n){
        let set = new Set();
        while(!set.has(n)){
            set.add(n);
            if(n === 1){
                return true;
            }
            n = getSumDigit(n);
        }
        return false;
        
    }
    function getSumDigit(n){
        let sum = 0;
        while(n !== 0 ){
            let digit = n%10;
            sum += (digit*digit);
            n = parseInt(n/10);
        }
        return sum;
    }
    
   // console.log(happyorNt(19));

   function solve(A, B){
    let i = 0;
    let j = A.length - 1;
    let count = 0;
    while(i < j){
        if(A[i] + A[j] > B){
            j--;
        }else if(A[i] + A[j] < B){
            i++;
        }else{
            if(A[i] === A[j]){

            }
            count++;
            j--;
        }
    }
    return count;
}
//solve([1,1,1], 2);



function solve(A, B){
    let i = 0;
    let j = A.length - 1;
    let count = 0;
    while(i < j){
        let sum = A[i] + A[j];
        if( sum > B){
            j--;
        }else if(sum < B){
            i++;
        }else {

            if(A[i] == A[j]){
                let repeat = j-i+1;
                count += ((repeat * (repeat-1))/2);
                console.log(j,i);

                break;
              }else{
                 let iRepeat = 1;
                 let jRepeat = 1;
                while(i < j && A[i] === A[i+1]){
                    i++;
                    iRepeat+=1;
                }
                while(i < j && A[j] === A[j-1]){
                    j--;
                    jRepeat++;
                }
                count += iRepeat * jRepeat;
                console.log("11"+count);
                i++;
                j--;
            }
        }
    }
    return count;
}
//console.log(solve([ 2, 2, 3, 4, 4, 5, 6, 7, 10 ], 8));//1, 2, 3, 4, 5

function threeSumClosest(A, B){
    let startIdx = 0;
    let endIdx;
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(endIdx = 0; endIdx < A.length; endIdx++){
        sum += A[endIdx];
        if((endIdx - startIdx) + 1 == 3){ 
            if(Math.abs(B - sum) < Math.abs(B - ans)) {
                ans = sum;
            }
            sum -= A[startIdx++];
        }
    }
    return ans;
}
let A = [ 9, -8, -10, -7, 7, -8, 2, -7, 4, 7, 0, -3, -4, -5, -1, -4, 5, 8, 1, 9, -2, 5, 10, -5, -7, -1, -6, 4, 1, -5, 3, 8, -4, -10, -9, -3, 10, 0, 7, 9, -8, 10, -9, 7, 8, 0, 6, -6, -7, 6, -4, 2, 0, 10, 1, -2, 5, -2 ];

//console.log(threeSumClosest(A, 0));

function addBinary(A, B){
    let l1 = A.length;
    let l2 = B.length;
    let n = Math.max(l1, l2);
    let ans = '';
    let carry = 0;


    for(let i = 0; i < n; i++){
        let digitSum =  parseInt(A[l1 - 1 - i] || 0) + parseInt(B[l2 - 1 - i] || 0) + carry;
        carry = parseInt(digitSum / 2);
        ans = digitSum % 2 + ans;
    }
    return carry ? "1" + ans : ans;
}
//console.log(addBinary("11", "1"));

function solve1(A, B, C){
    let i = 0;
    let j = B.length - 1;
    let ans = Number.MAX_SAFE_INTEGER;
    while(i < A.length && j >=0){
        let sum = A[i] + B[j];
        if(Math.abs(sum - C) < Math.abs(sum - ans)) {
            ans = sum;
        }
        console.log(ans);

        if(sum > C){
            j--;
        }else{
            i++;
        }
    }
    return ans;

}
//console.log(solve1([1, 2, 3, 4, 5], [2, 4, 6, 8], 9));
//console.log(solve1([5, 10, 20], [1, 2, 30], 13));

//27. Remove Element

function removeElement(nums, val) {
    let n = nums.length;
    if(n === 0 || n ===1){
        return nums;
    }
    let p1 = 0;

    

    for(let p2 = 1; p2 < n; p2++){
        if(nums[p2] === val){
            p1 === p2;
            p2++;
          //  nums[p1] = nums[p2];
        }else if(nums[]){

        }
    }
    return nums;
}
//console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));