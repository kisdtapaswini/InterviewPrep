// Brute Force so;utions
// Time Complexity O(n^3)
function subArrayWithOR1(A){
    let ans  = 0;
    for(let i = 0; i < A.length; i++){
        for(let j = i; j < A.length; j++){
            let val = 0;
            for(let k = i; k <=j; k++){
                val = (val | A[k]) ;
            }
            if(val=== 1){
                ans++;
            }
        }
    }
    return ans;
}
//console.log(subArrayWithOR1([1, 0, 1]));

//Optimised1(Using carry forward method in the subArray)
// Time Complexity O(n^2)

function subArrayWithOR1Opt1(A){
    let ans  = 0;
    for(let i = 0; i < A.length; i++){
        let val = 0;
        for(let j = i; j < A.length; j++){
           val = (val | A[j]) ;
            if(val=== 1){
                ans++;
            }
        }
    }
    return ans;
}
//console.log(subArrayWithOR1Opt1([1, 0, 1]));

//Most Optimised
/**
 * If a single 1 is present in the subArray then the bitwise OR for that subarray is going to be 1
 *  If all elements are 0 in the subArray then the bitwise OR for that subarray is going to be 0
 * So subarrays of bitwise OR 1 = total no of subarrays - subarrays of bitwise OR is 0
 */
// Time Complexity O(n)
function subArrayWithOR1Opt2(A,B){
    let onlyZeroSubArrays = 0;
    let count = 0;
    for(let i = 0; i < A; i++){
        if(B[i] == 0){
            count++;
        }
        else{
            onlyZeroSubArrays += (count * (count+1))/2;
            count = 0;
        }
    }
    if(count > 0){
        onlyZeroSubArrays = onlyZeroSubArrays + (count * (count+1))/2;
    }

    return (A * (A+1))/2 - onlyZeroSubArrays;
}
console.log(subArrayWithOR1Opt2(5,[ 0, 1, 1, 0, 1 ]));
