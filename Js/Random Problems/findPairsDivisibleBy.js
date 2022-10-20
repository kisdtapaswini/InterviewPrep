function findPairsDivisibleBy(arr, d){
    let sum = 0;
    let count = 0;
        for(let each = 0; each < arr.length; each++) {
            for(let next = each+1; next < arr.length; next++){
                sum = arr[each]+arr[next];
                if(sum % d ===0){
                    count++;
                }
            }
        }
        return count;
}
console.log(findPairsDivisibleBy([30,20,150,100,40], 60));