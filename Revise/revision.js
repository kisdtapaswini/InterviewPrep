function findtheSum(mat, r, c){
	let n = mat.length;
	for(let i = 0; i < n; i++){
		for(let j = i+1; j < n; j++){
			console.log(mat[i][j]);
		}
	}

}
let A = [
    [4,3,1,10],
    [6,2,3,11],
    [5,3,2,13],
	[2,4,6,17]
]
//console.log(findtheSum(A, 0, 1));

//count all subArray with sum = k
function getSUbArraySumK(A, B){
	let startIdx = 0;
	let leastAvg = Number.MAX_SAFE_INTEGER;
	let n =  A.length;
	let sum = 0;
	let ansIdx = 0;
	for(let endIdx = 0; endIdx < n; endIdx++){
		sum += A[endIdx];
        let windowSize = endIdx - startIdx + 1;
		if(windowSize === B){
			let avgCurrent = parseInt(sum/B);
			if( avgCurrent < leastAvg){	
				ansIdx = startIdx;
				leastAvg = avgCurrent;
			}
			sum = sum - A[startIdx++];
		}
	}
	return ansIdx;
}
<<<<<<< HEAD
//console.log(solve([5, 17, 100, 11], [1, 100]));
//console.log(solve([ 3, 20, 17, 17 ], [ 5, 9, 20, 11, 6, 18, 7, 13 ]));

let ans = (function MergeTwoSorted(A){
	let swapCount = 0;
	for(let i = 0; i < A.length; i++){
		for(let j = 0; j < A.length - i; j++){
			if(A[j] > A[j+1]){
				swap(A, j, j+1);
				swapCount++;
			}
		}
		if(swapCount === 0){
			break;
		}
	}
	console.log(swapCount);
	return A;
})([9, 3, 8, ], 3);
console.log(ans);

function swap(arr, idx1, idx2){
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
=======
console.log(getSUbArraySumK([3, 7, 90, 20, 10, 50, 40], 3));
>>>>>>> f54133556f736ac8b35ec251edd5fa4123565af3
