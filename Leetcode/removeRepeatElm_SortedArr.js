function removeRepeat(nums){
    let n = nums.length;
    let idx1 = 0
    for(let idx2 = 1; idx2 < n; idx2++){
        if(nums[idx2] !== nums[idx2 -1]){
            idx1 ++;
            nums[idx1] = nums[idx2];
        }
    }
    nums = nums.splice(0, idx1+1);
    return nums;

}

console.log(removeRepeat( [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ]));


