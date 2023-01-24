function findSUbSetWithKSum(arr, k){
    let n = arr.length;
    for(let i = 0; i < (1 << n); i++){
        let sum = 0;
        for(let j = 0; j < n; j++){
            if(checkBit(i,j)){
                sum += arr[j];
            }
        }
        if(sum === k){
            return 1;
        }
    }
    return 0;
}
function checkBit(num, i){
    if((num & (1 << i)) != 0){
        console.log("checBit : "+num, i);

        return true;
    }
    return false;

}
//console.log(findSUbSetWithKSum([-2, 6, 4], 11));

function findSumOfMax(arr) {
    let n = arr.length;
    let sum = 0;
    for(let i = 1; i < (1 << n); i++){
        let max = Number.NEGATIVE_INFINITY;
        for(let j = 0; j < n; j++){
            if(checkBit(i,j)){
                max = Math.max(arr[j], max);
            }
        }
        console.log(max);
        sum += max;
    }
    return sum;
}
console.log(findSumOfMax([3, 1, -4]));