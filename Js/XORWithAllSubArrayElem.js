(function (arr){
    let len = arr.length;
    let ans;
     for(let i =0; i<len; i++){
       for(let j = i; j<len; j++){
           for(let k = i; k <= j; k++){
              ans ^= arr[k];
           }
       }
     }
    console.log(ans);
     
 }([3,4,5]));