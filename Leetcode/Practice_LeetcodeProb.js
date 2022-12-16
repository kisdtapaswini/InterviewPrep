function findminSubArr(arr, t){
    let len = Number.MAX_VALUE;
    let flag = 0;
    let pfArr = [];
    pfArr[0] = arr[0];
    for(let i = 1; i < arr.length; i++){
     pfArr[i] = pfArr[i -1] + arr[i];   
    }
    let map = new Map();
    pfArr.forEach((ele, idx)=> {
        if(ele < t){
            map.set(ele, idx);
        }else if(ele === t){
            flag = 1;
            len = Math.min(len, idx+1);
        }else {
            let toFInd = ele - t;
            flag = 1;
            if(map.has(toFInd)){
              //console.log(idx +"-"+ map.get(toFInd));
                len = Math.min(len, idx - map.get(toFInd));
            }else{
                len = Math.min(len, idx - 1);
            }
        }
        map.set(ele, idx);
        
    });
    return flag ? len : 0;

}
//console.log(findminSubArr([2,3,1,2,4,3], 7));
console.log(findminSubArr([1,2,3,4,5], 11));

// function findminSubArr(arr, t){
//     for(let i = 0; i< arr.length; i++){
//         let sum = arr[i];
//         for(let j = i+1; j < arr.length; j++){
//             sum += arr[j];
//             if(sum === t){
//                 return "found";
//             }
//         }

//     }
//     return "nt found";

// }
// //console.log(findminSubArr([2,3,1,2,4,3], 7));
// //console.log(findminSubArr([1,2,3,4,5], 11));