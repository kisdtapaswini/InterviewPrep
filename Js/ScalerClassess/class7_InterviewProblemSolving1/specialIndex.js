/**
 * 
 * @param {*} arr 
 * @returns 
 * calculate the sum of even numbers in a range[s,e]
 */

 function findSpecialIndexOpti(arr) {
    let pfEven = [];
    let pfOdd = [];
    pfEven[0] = arr[0];
    pfOdd[0] = 0;
    for(let i = 1; i < arr.length; i++){
        if(i % 2 === 0){
            pfEven[i] = pfEven[i-1] + arr[i];
        }else{
            pfEven[i] = pfEven[i-1];
        }
    }
    console.log(pfEven);
    let s = 2;
    let e = 5;
    if(s === 0){
        return pfEven[e];
    }else{
        return pfEven[e] - pfEven[s-1];
    }

}
//console.log(findSpecialIndexOpti([2,3,1,6,4,5]));


/**
 * How many special special elems are present in an given array.
 * special index :- an index after removing which - summ of all odd index elems = sum of all even index elems
 * @param {*} arr 
 * @returns 
 */
function findSpecialIndex(arr) {

    for(let i = 1; i < arr.length; i++){
        let oddIndex = 0;
        let evenIndex = 0;
        for(let j = 0; j < i -1; j++){
            if(j % 2 === 0){
                evenIndex += arr[j]; 

            }else{
                oddIndex += arr[j];
            }
        }
        for(let j = i+1; j < arr.length; j++){
            if(j % 2 === 0){
                oddIndex += arr[j]; 

            }else{
                evenIndex += arr[j];
            }
        }
        console.log(oddIndex +"==="+ evenIndex);
        if(oddIndex === evenIndex){
            return i;
        }

    }


}
//console.log(findSpecialIndex([2,1,6,4]));
//optimized one using prefix sum

function findSpecialIndexUsingPrefixSum(arr) {
    let pfEven = [];
    let pfOdd = [];
    pfEven[0] = arr[0];
    pfOdd[0] = 0;
    for(let i = 1; i < arr.length; i++){
        if(i % 2 === 0){
            pfEven[i] = pfEven[i-1] + arr[i];
        }else{
            pfEven[i] = pfEven[i-1];
        }
    }
    for(let i = 1; i < arr.length; i++){
        if(i % 2 != 0){
            pfOdd[i] = pfOdd[i-1] + arr[i];
        }else{
            pfOdd[i] = pfOdd[i-1];
        }
    }

    for(let i = 0; i < arr.length; i++){
        let oddSum;
        let evenSum;
        if(i === 0){
         oddSum = pfEven[arr.length-1] - pfEven[i];
         evenSum =  + pfOdd[arr.length-1] - pfOdd[i];

        }else{
            oddSum = pfOdd[i-1] + pfEven[arr.length-1] - pfEven[i];
            evenSum =  pfEven[i-1] + pfOdd[arr.length-1] - pfOdd[i];

        }
        if(oddSum == evenSum){
            return i;
        }
    }

}
console.log(findSpecialIndexUsingPrefixSum([2,1,6,4]));