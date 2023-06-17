// Bit manipulation

function setIthBit(n, i){
	return (n ^ (1 << i));

}
console.log(setIthBit(20,1));