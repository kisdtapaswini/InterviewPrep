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
    console.log(findMaj([2,2,1,1,1,2,2]));