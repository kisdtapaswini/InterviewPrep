/**
 * Count pairs 'ag'
 * Given a char[], calculate the no.of pairs [i,j](indexes) such that i < j && s[i] = 'a'and s[j] = 'g'
 * All chars in lower case
 */
// Brute Force -  Here number of iteration is less but still the time complexity is n^2
// Iterate each elelment for each 'a', iterate the right and count number of 'g's
// Time complexity - O(n^2)
// Space complexity - O(1)

function countPairs(str){
    let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a')
    for(let j = i+1; j < str.length; j++){
        if(str[j] === 'g'){
            count++;
        }
    }
  }
  return count;
}
//console.log(countPairs("abcgag"));

/**
 * Using prefix array.
 */

 function countPairsUsingPrefixSum(str){
    let pfCountA = [];
    let pairCount = [];
    pfCountA[0] = 0;
    for(let i = 1; i < str.length ; i++){
        if(str[i] === 'a'){
            pfCountA[i] = pfCountA[i-1] +1;
        }else{
            pfCountA[i] = pfCountA[i-1];  
        }
    }
   // console.log(pfCountA);

    pairCount[0] = pfCountA[0];

    for(let i = 1; i < str.length ; i++){
        if(str[i] === 'g'){
            pairCount[i] = pairCount[i-1] + pfCountA[i-1];
  
        }else{
            pairCount[i] =  pairCount[i-1];
        }
    }
   // console.log(pairCount[pairCount.length-1]);
    return pairCount[pairCount.length-1];
}
console.log(countPairsUsingPrefixSum("bcaggaag"));

/**
 * Optimised solution. Idea-1
 * Count the number of 'g'from right hand side and carry it towards the index zero
 * // Time complexity - O(n)
// Space complexity - O(1)
 */
function countPairsOptimised(str){
    // let countG = 0;
    // let agCount = 0;
//    for(let i = str.length-1; i >=0 ; i--){
//         if(str[i] === 'g'){
//             countG++;  
//         }
//         if(str[i] === 'a'){
//             agCount += countG;
//         }

//     }
    let countA = 0;
    let agCount = 0;
    for(let i = 0; i <= str.length ; i++){
        if(str[i] === 'g'){
            agCount++;  
        }
        if(str[i] === 'a'){
            countA += countA;
        }
    }
    return agCount;

}
//console.log(countPairs("abcgag"));

/**
 * Optimised solution. Idea-2 Traverse from left
 * Count the number of 'a'from left hand side and carry it towards the last index
 */
 function countPairsOptimised2(str){
    let countA = 0;
    let ansCount = 0;
    for(let i = 0; i < str.length ; i++){
        if(str[i] === 'a'){
            countA++;  
        }
        if(str[i] === 'g'){
            ansCount += countA;
        }

    }
    return ansCount;

}
//console.log(countPairsOptimised2("adgagagfg"));
