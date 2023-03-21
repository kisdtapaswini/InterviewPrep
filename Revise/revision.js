function findMagicalNumber(A, B, C){
	let min = Math.min(B, C);
	let lcm = Math.max(B, C);
	let ans;
	while (true) {
		if (lcm % B == 0 && lcm % C == 0) {
			break;
		}
		lcm++;
	}
	let max = min * A;
	while(min <= max){
		let mid = parseInt((min + max)/2);
		let MagicalNumCount = (parseInt(mid/B) + parseInt(mid/ C)) - parseInt(mid/lcm);
//	console.log(min, max, MagicalNumCount);
		if(MagicalNumCount < A){
			min = mid + 1;
		}else{
			ans = mid;
			max = mid - 1;
		}
	}
	return ans;
}
//console.log(findMagicalNumber(4,2,3));
function solve(A, B){
	let map = new Map();
	B.forEach((element, index) => {
		map.set(element, index);
	});
	console.log(map);
	const comparator = (a, b)=>{

	}

	return A;
}
//console.log(solve([5, 17, 100, 11], [1, 100]));
console.log(solve([ 3, 20, 17, 17 ], [ 5, 9, 20, 11, 6, 18, 7, 13 ]));