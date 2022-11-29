function reverseBit(A){
    let reverseNumber = 0;

    for (let i=0; i < 32; i++) {
        if ((A & (1<<i)) > 0 ) {
            reverseNumber = reverseNumber | (1 << (31 - i));
        }
    }

    return  reverseNumber >>> 0;
}
console.log(reverseBit(3));

// function reverseBit(A){
//     for(let i = 0; i<= 31; i++){
//         if((BigInt(A) & BigInt(1 << i)) != 0){
//             A = (BigInt(A) + BigInt(1 << (31-i)));
//         }
//     }
//     return A;
// }
// console.log(reverseBit(3));