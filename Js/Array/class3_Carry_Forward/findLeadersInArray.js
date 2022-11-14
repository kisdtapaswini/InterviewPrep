/**
 * Find leaders in arr
 * In a given array count the number of leader, an elemnt is a leader if it is strictly greater than all the elements on right hand side
 * Note: arr[n-1] is always leader
 * We can conclude the leader should be grater than the max value on right side
 */
// Brute force
// Time complexity - O(n^2)
// Space Complexity - O(1)
function findLeader(arr) {
    let resultArr = [];
    for(let i = 0; i < arr.length-1; i++){
        let max = arr[i+1];
        for(let j = i+2; j< arr.length; j++){
            if(max < arr[j]){
                max = arr[j];
            }
        }
        console.log(arr[i] + ":" +max);
        if(max < arr[i]){
            resultArr.push(arr[i]);
        }
    }
    resultArr.push(arr[arr.length - 1]);

    console.log(resultArr);
    return resultArr;
}
//findLeader([16, 17, 4, 3, 5, 2]);

/**
 * Optimise One - 
 * Maintain the max from right
// Time complexity - O(n)
// Space Complexity - O(1)
 */
//
function findLeaderOpti(arr) {
    let resultArr = [];
    let max = arr[arr.length - 1]
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] > max){
            resultArr.push(arr[i]);
            max = arr[i];
        }
    }
    resultArr.push(arr[arr.length - 1]);
    console.log(resultArr);
    return resultArr;
}
findLeaderOpti([16, 17, 4, 3, 5, 2]);