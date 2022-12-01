function sortByFactors(A){
    let n = A.length;
        let factArr = new Array(n);
        for(let i = 0 ; i < n; i++){
            factArr[i] = { 'val': A[i], 
             'factors': factorsCount(A[i])
             }; 
        }
        console.log(factArr);
          factArr.sort((e1, e2) => {
              if(e1.factors === e2.factors){
                return e1.val < e2.val ? -1 : 1;
              }else{
                return e1.factors > e2.factors ? -1 : 1;
              }
          });
          console.log("After sorting : "+factArr[2].val);

        let ans = [];
        for (let i = 0; i < n; i++) {
          ans.push(factArr[i].val);
        }

       // console.log(factArr);
         return ans;
}
function factorsCount(ele){
    let count = 0;
    for(let i = 1; i <=ele; i++){
        if(ele % i === 0){
            count++;
        }
    }
    return count;
}
console.log(sortByFactors([6, 8, 9]));