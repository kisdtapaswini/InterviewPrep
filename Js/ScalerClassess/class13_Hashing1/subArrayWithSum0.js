function isSumZero(A){
    let pfSumArr = [];
    let map = new Map();
    pfSumArr[0] = A[0];

    for(let i = 1; i < A.length; i++){
        pfSumArr[i] = pfSumArr[i-1] + A[i];
    }
    for(let i = 0; i < pfSumArr.length; i++) {
        if(map.has(pfSumArr[i])) {
            map.set(pfSumArr[i], map.get(pfSumArr[i])+1);
        } else {
            map.set(pfSumArr[i], 1);
        }
    }
    for (let entry of map.entries()) {
        if(entry[1] >= 2 || map.has(0)){
           return 1;
        }
    }
    return 0;

    // if(repeatVal.length > 0 || map.has(0)){
    //     return 1;
    // } else{
    //     return 0;
    // }
}
//console.log(isSumZero( [1, 2, 1, -4, 6, -6]));

//Q2. Common Elements
function commonElem(A, B){
    let n = A.length;
    let m = B.length;
    let mapA = new Map();

    let mapB = new Map();

    for(let i = 0; i < n; i++) {
        if(mapA.has(A[i])) {
            mapA.set(A[i], mapA.get(A[i])+1);
        } else {
            mapA.set(A[i], 1);
        }
    }
    let result = [];
    for(let i = 0; i < m; i++) {
        if(mapA.has(B[i]) && mapA.get(B[i]) > 0) {
            mapA.set(B[i], mapA.get(B[i])-1);
            result.push(B[i]);
        } 
    }
   // let result = [];
    // Object.keys(mapA).forEach(function (k) {
    //     console.log(mapA[k]);
    //     if (mapA[k] == mapB[k]) {
    //         result = mapA[k];
    //     }
    // });
 //  var result = {};
//var conflicts = {};
//Object.keys(mapA).forEach((key) => {
   // console.log("printing");
//   if (mapB.hasOwnProperty(key)) {
//     conflicts[key] = mapA[key];
//     result[key] = mapB[key];
//   } else {
//     result[key] = mapA[key];
//   }
//});

//console.log("Conflicts", conflicts);
console.log("Result", result);
  //  console.log(mapB);

}
//console.log(commonElem([1, 2, 2, 1], [2, 3, 1, 2]));
//console.log(commonElem([ 2, 1, 4, 10 ], [ 3, 6, 2, 10, 10 ]));

//Q3. Colourful Number

function colorfulNum(N){
    let arr = [];

    while(N != 0){
        arr.push(N % 10);
        N = parseInt(N/10);
    }
    arr.reverse();
    let set = new Set();
    for(let i = 0; i < arr.length; i++){
        let prod = 1;
        for(let j = i; j < arr.length; j++){
            prod = arr[i] * arr[j];
            if(set.has(arr[prod])){
                return 0;
            }else{
                set.add(prod);
            }
        }
        console.log(set);
    }
    return 1;

}
console.log(colorfulNum(236));