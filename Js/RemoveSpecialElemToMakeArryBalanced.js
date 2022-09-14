(function (A){

    let specialCount = 0;
    for(let i =0; i < A.length; i++){
        let evenCount = 0;
        let oddCount = 0;
        let arr = A.filter((item, idx) => idx !== i);
      //  console.log(arr);
        for(let j =0; j < arr.length; j++){
            if(j % 2 === 0){
                evenCount +=  arr[j];  
            }else{
                oddCount += arr[j];
            }
        }
        if(evenCount === oddCount){
            specialCount ++;
        }
    }
})([5, 5, 2, 5, 8]);