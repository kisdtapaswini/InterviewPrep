function prefixSum(arr){
    for(let index= 1; index < arr.length; index++){
        arr[index] = arr[index] + arr[index - 1];
    }
    return arr;

}
console.log(prefixSum([10, 20, 10, 5, 15]));