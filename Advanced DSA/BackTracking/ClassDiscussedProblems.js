/**
 * 1. Backtracking is a technique which helps to find a solution by exploring all possible candidates
 * 2.
 */

// Q1. Find all n digit numbers which can be formed with {1, 2}.
function print(i, n, tempAns) {
  if (i === n) {
    console.log(tempAns);
    return;
  }
  tempAns[i] = 1;
  print(i + 1, n, tempAns);

  tempAns[i] = 2;
  print(i + 1, n, tempAns);
}
// print(0, 3, []);

// Q2. Given a set of distinct integers A, return all possible subsets.
function subsets(A){
  let ans = [];
  A.sort((a,b)=>b-a);
  getAllsubsets(0, A, ans, new Array());
  return ans;
}
function getAllsubsets(idx, arr, ans, currentList){
  if(idx === arr.length){
   ans.push([...currentList]);
//  console.log(currentList);
    return;
  }

  currentList.push(arr[idx]);
  getAllsubsets(idx+1, arr, ans, currentList);
  currentList.pop();
  getAllsubsets(idx+1, arr, ans, currentList);

}
//console.log(subsets([1, 2, 3]));
//Permutations

function getAllPermutations(A, ans, result){
      // if(ans.length === A.length){
      //  console.log(ans);
      //   return;
      // }
      // for(let i = 0; i < A.length; i++){
      //   if(ans.indexOf(A[i])){
      //     continue;
      //   }
      //   ans.push(A[0]);
      //   getAllPermutations(ans, A);
      //   ans.pop();
      // }

      if (!A.length) {
       // console.log(ans);
        result.push([...ans]);
        return;
      }
        for(let i = 0; i < A.length; i++){
          const elem = A[i];
          ans.push(elem);
          A.splice(i, 1);
          getAllPermutations(A, ans, result);
          ans.pop();
          A.splice(i, 0, elem);
        }
      
}
let ansArr = [];
getAllPermutations(['A', 'B', 'C'], [], ansArr);
console.log(ansArr);
//console.log(['A', 'B', 'C'].shift());