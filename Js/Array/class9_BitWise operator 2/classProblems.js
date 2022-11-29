
/**
 * Check if ith bit is set or not
 * */
function checkIfithBitIsSet(n, i){
    if((n & (1<<i)) != 0){
        return true
    }
    return false;
}
//console.log(checkIfithBitIsSet(45, 4));

/**
 * Count the number of set bits in a given number n
 * Exactly 32 iterations so time complexity is O(1) here
 */
 function countofSetbits(n) {
    let count = 0;
    // for(let i = 0; i <32; i++) {
    //     if((n & (1<<i)) != 0){
    //         count++;
    //     }
    // }
    while(n !=0){ // Time complexity is O(logn) here loop is ofless numbers  and time complexity is the farthest 1 (set bit) from the right // count of bits in after removing leading zeros
        if((n & 1) === 1){
            count++;
        }
        n = n >> 1;
    }
    return count;
 }
 //console.log(countofSetbits(45));
 // Q1. Time complexity is O(logn)

 /**
 * Set the ith bit in n
 * */
function setithBit(n, i) {
    return (n | (1<<i));
}
//console.log(setithBit(20, 1));


 /**
 * Unset the ith bit in n
 * */
  function unSetithBit(n, i) {
    if((n & (1 << i)) != 0){
       return n ^ (1<<i)
    }
    return n
}
console.log(unSetithBit(22, 1));
