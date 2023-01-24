//1. Check Bit
function checkBit(num, i){
    if((num & (1 << i)) != 0){
        return true;
    }
    return false;

}
//2. Compare two string lexically
function compare(str1, str2){
    if(str1 === str2) {
        return str1;
    }

    if (str1 < str2) {
        return str1;
    }

    return str2;
}
//3. sort 2D array lexically (using a comparator)
 function sortFunction (a, b) {
    let an = a.length;
    let bn = b.length;
    for(let i = 0; i < Math.min(an, bn); i++){
        if (a[i] !== b[i]) {
            return (a[i] < b[i]) ? -1 : 1;
        }

    }
}
//let arr = [[ 4 ],[ 12 ],[ 4, 12 ]]
//console.log(arr.sort(sortFunction));

//4. Ascendin(small to large) order comparator
function ascending(arr){
    return arr.sort((a, b) => console.log(a-b));
}
//console.log(ascending([2,6,1,0,10]));

//5. Descending(large to small) order comparator
function descending(arr){
    return arr.sort((a, b) => console.log(b-a));
}
//console.log(ascending([2,6,1,0,10]));

//6. Iterate map entries
for (let entry of map.entries()) {
    // entry[0] holds key;
    // entry[1] holds val;
    // if(entry[1] >= 2){
    //     ans += entry[1];
    // }

}
//7. To converta number string to snumber we can use +operator
//console.log(+'1'+1); // will print 2 not 11