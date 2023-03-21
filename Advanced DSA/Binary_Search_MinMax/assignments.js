//1. Painters and block problem

function isPossible(Tc, A, p, t){
    let rem = Tc;
    let count = 1;
    for(let i = 0; i < A.length; i++){
        if(Tc < A[i] * t){
            return false;
        }
        if(rem >= A[i] * t){
            rem -= A[i] * t;
        }else{
            count++;
            rem = Tc - A[i] * t;
        }
    }
    if(count <= p ){
        return true;
    }else{
        return false
    }
}

function binarySearchToCheck(A1, p1, t1){
    let low = 0;
    // Using reduce function to find the sum
    let high = A1.reduce(function (x, y) {
        return x + y;
    }, 0);
    let ans = -1;
    while(low <= high){
        let mid = low + parseInt((high-low)/2);
        let time = mid * t1;
        if(isPossible(time, A1, p1, t1)){
            ans = time;
            high = mid - 1;
        }else{
            low  = mid + 1;
        }
    }
    return ans;
}
//console.log(binarySearchToCheck([5,3,6,1,9], 3, 3));

// Aggressive cows

function checkDist(A, c, d){
    let count = 1;
    let last = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] - last >= d){
            count++;
            last  = A[i];
        }
    }
    if(count >= c){
        return true;
    }
    return false;
}
function cows(A, c){
    let ans = -1;
    let low = 1;
    let high = A[A.length-1] - A[0];
    while(low <= high){
        let mid = low + parseInt((high - low)/2)
        if(checkDist(A,c,mid)){
            ans = mid;
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return ans;
}

console.log(cows([ 5, 17, 100, 11 ], 2));
// Aggressive Cows Brute Force

function AggressiveCows(A, c){
    let n =  A.length;
    let nOfDist = A[n-1];
   for(let i = 1; i <= nOfDist; i++){
    let noOfCows = 1;
    let last = A[0];
        for(let j = 1; j < n; j++){
            if(A[j] - last == i){
                noOfCows++;
                last = A[j];
            }
        }
        if(noOfCows >= c){
            console.log(`For distance ${i}, ${noOfCows} can stay inside`);
        }else{
            console.log(`For distance ${i}, ${noOfCows} can't stay inside`);
        }
   }
}
//console.log(AggressiveCows([1, 2, 3, 4, 5], 3));