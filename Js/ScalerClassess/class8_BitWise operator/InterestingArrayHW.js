function findInterestingArrOrNot(A){
    let oddCount = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 !=0){
            oddCount++
        }
    }
    if(oddCount % 2 ===0){
        return 'Yes';
    }else{
        return 'No';
    }

}
console.log(findInterestingArrOrNot([9, 17]));