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
console.log(getSUbArraySumK([3, 7, 90, 20, 10, 50, 40], 3));