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
console.log(majorityElem([2, 1, 2]));