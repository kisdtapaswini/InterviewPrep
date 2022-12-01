/**
 * Q3. Help From Sam
 */
function noOfhelp(num){
    if(num === 0){
        return 0;
    }
    let n;
    for(let i = 1 ; i <= num; i = i*2 ){
        n = i;
    }
    return ;

}
//console.log(noOfhelp(7));

/**
 * Q6. Reverse Bits
 * 
 */
function reverseBit(num){
    for(let i = 0; i< 32; i++){
        num = num << 1;
    }
    return num;

}
console.log(reverseBit(3));

