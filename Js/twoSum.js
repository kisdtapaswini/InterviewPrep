var twoSum = function(nums, target) {

    // for(let i = 0; i < nums.length; i++){
        
    //     for(let j=0; j< nums.length; j++){
    //         debugger;
    //         if(i !== j && nums[i]+nums[j] === target){
    //             return [nums[i], nums[j]];
    //         }
    //     }

    // }
    // return 'no such pair';
    let set = new Set();

    for(let i = 0; i < nums.length; i++){
        
        let diff = target - nums[i];
        if(set.has(diff)){
            return 1;
        }else{
            set.add(nums[i]);

        }
    }
    return 'no such pair';
    
};
//console.log(twoSum([2,6,7,5,4, 0, 1,3], 4));
console.log(twoSum([ 23, 52, 95, 29, 9, 47, 49, 55, 96, 4 ], 100));