/**
 * You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
 */
function countOfAmazingSubString(S){
    let count = 0;
    for(let i = S.length-1; i >= 0; i--){
        let ch = S[i].toUpperCase();
        if(ch === 'A' || ch=== 'E' || ch === 'I' || ch === 'O' ||ch === 'U'){
            count += S.length - i;
        }
    }
    return count;
    
}
console.log(countOfAmazingSubString('pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn'));