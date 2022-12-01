/**
 *
 * @param {*} A
 * @param {*} B
 */
function alternatingSubArrays(A, B){
    let n = A.length;
    let len = 2*B + 1;
    let ans = [];
    for(let i = 0; i < n-len +1; i++){
        let prev = -1;
        let flag = 1;
        let j;
        for(j = i; j < i+len ; j++){
            if(A[j] === prev){
                flag = 0;
                break;
            }
            prev = A[j];
        }
        if(flag){
            ans.push(i+B);
        }

    }
    return ans;

}
//console.log(alternatingSubArrays( [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1 ], 1));

/**
 *  Counting Subarrays Easy
 */
function countignSubArray(A, B){
    let n = A.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum += A[j];
            console.log(sum);

            if(sum < B){
                count++;
            }
        }
    }
    console.log(count);

}
//console.log(countignSubArray([15, 8, 16], 242));


function countignGodSubArray(A, B){
    let n = A.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < n; j++){
            sum += A[j];
            if((sum < B && (j -i +1)%2 === 0) || (sum > B && (j -i +1)%2 !== 0)){
                count++;
            }
        }
    }
    console.log(count);

}
console.log(countignGodSubArray([1, 2, 3, 4, 5], 4));
