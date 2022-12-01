/**
 * You're given a read-only array of N integers.
 *  Find out if any integer occurs more than N/2 times in the array in linear time and constant additional space.
 * @param {*} arr 
 * @returns 
 */
function majorityElem(arr){
    let majorityElem = arr[0];
    let count = 1;
 //   console.log(majorityElem);
   // console.log(count);
  //  console.log("--------------");

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === majorityElem){
            count++;
        }else{
           // majorityElem = arr[i];
           if(count === 0){
            majorityElem = arr[i];
            count = 1;
           }else{
            count--;
           }
        }
        // console.log(majorityElem);
        // console.log(count);
        // console.log("--------------");
    }
    let majorityLen = arr.filter(_ => _ === majorityElem).length;
    if(count !=0 && majorityLen){
        return majorityElem;
    }
}
//console.log(majorityElem([2, 1, 2]));

/**
 * You're given a read-only array of N integers.
 *  Find out if any integer occurs more than N/3 times in the array in linear time and constant additional space.
 * @param {*} arr 
 * @returns 
 */
 function majorityElemND3(arr){
    let majority1 = arr[0];
    let count = 1;
    let majority2 = arr[0];;
    let count2 = count;
    let n = arr.length;
 //   console.log(majorityElem);
   // console.log(count);
  //  console.log("--------------");

    for(let i = 1; i < n; i++){
        if(arr[i] === majority1){
            count++;
            majority2 = majority1;
            count2 = count;
        }else{
           if(count === 0){
            majority1 = arr[i];
            count = 1;
           }else{
            count--;
           }
        }
        console.log(majority1);
        console.log(count);
        console.log("                ");

        console.log(majority2);
        console.log(count2);

        console.log("--------------");
    }
     let majority1Len = arr.filter(_ => _ === majority1).length;
     let majority2Len = arr.filter(_ => _ === majority2).length;
     console.log(majority2Len);
    let resultArr = [];
    if(count !=0 && majority1Len >= parseInt(n/3)){
        resultArr.push(majority1);
    }
    if(count2 !=0 && majority2Len >= parseInt(n/3)){
        resultArr.push(majority2);
    }
    return resultArr;
}
//console.log(majorityElemND3([1, 9, 8, 1, 2, 3, 1, 1, 5, 5, 5]));

console.log(majorityElemHelp([5, 1, 9, 5, 1, 1, 3, 1, 1, 5, 5, 5]));


function majorityElemHelp(arr){
    let majority1 = -1;
    let count1 = 0;
    let majority2 = -1;
    let count2 = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        if(arr[i] == majority1){
            count1++;
        }
        else if(arr[i] == majority2){
            count2++;
        }
        else if(count1 == 0){
            count1 = 1;
            majority1 = arr[i];
        }
        else if(count2 == 0){
            count2++;
            majority2 = arr[i];
        }
        else{
            count2--;
            count1--;
        }
    }
    let majority1Len = arr.filter(_ => _ === majority1).length;
    let majority2Len = arr.filter(_ => _ === majority2).length;
    if(count1!=0 && majority1Len*3>n){
        return majority1;
    }
    if(count2!=0 && majority2Len*3>n){
        return majority2;
    }
    return -1;
}