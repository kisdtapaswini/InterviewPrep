/**
 * Given N elements of Array. Count the numbe rof elements having atleast one element greater than it self
 * Given arr [] = [-3, 2, 6, 8, 4, 8, 5];
 * o/p :  5;
 * Time Complexity: O(n2)
 * Space Complexity: O(1)
 * Notes : Here j needs to start from zer only as greater elem can present before the number also
 */
// BruteForce Sol
function returnCount (arr){
    let count = 0;
    let iterationCount = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            iterationCount++;
            if(arr[j] > arr[i]){
                count ++;
                break;
            }
        }

    }
    console.log(iterationCount);
    return count;

}
// console.log(returnCount([2, 5, 1, 4, 8, 0, 8, 1, 3, 8]));
// console.log(returnCount([2, 5, 1]));


/**
 * Optimum solution:
 * Observations : Here max of an array is the only element which is not contributing in the count.
 * Steps :
 * 1. Get the max elem
 * 2. Count the frequency of max elem
 * 3. Result is arr.length - count;
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function returnCountOptimised(A){
    let count = 0;
    let max = A[0];
    for(let i = 1; i < A.length; i++) {
        if(A[i] > max){
            max = A[i]
            count = 0;
        }
        if(A[i] === max){
            count++;
        }
    }
    return A.length - count;
}
console.log(returnCountOptimised([2, 5, 1, 4, 8, 0, 8, 1, 3, 8]));
