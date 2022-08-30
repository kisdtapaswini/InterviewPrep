function tripletSum(arr,n){
    for(let each of arr)
    {
        let target;
        target = each === 0? 0 : -each;
        let set = new Set();
        for(let i = 0; i < arr.length; i++){
            
            let diff = target - arr[i];
            if(set.has(diff)){
               return 1;
            }else{
                set.add(arr[i]);

            }
        }
    }
    return 0;
}
//console.log(tripletSum([1, 2, 3],3));
//console.log(tripletSum([ 0, -1, 2, -3, 1 ],5));
console.log(tripletSum([4, -16, 43, 4, 7, -36, 18],7));