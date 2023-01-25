//21. Merge Two Sorted Lists

function mergeSorted(nums1, m, nums2, n) {
    let resArr = [];
    let i = 0;
    let j = 0;
    while( i < m && j < n){
        if(nums1[i] < nums2[j]){
            i++;
        }else{
            resArr.push(nums2[j]);
            j++;
        }
    }
        while(i < m){
            resArr.push(nums1[i]);
            i++;
        }
         while(j < n){
            resArr.push(nums2[j]);
            j++;
        } 
    nums1 = [...resArr];
    return nums1;
}
console.log(mergeSorted([1,2,3,0,0,0], 3, [2,5,6], 3));
//console.log(mergeSorted([1], 1, [], 0));