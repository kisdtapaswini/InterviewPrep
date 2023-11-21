// A = [1, 2, 3]
// [
//   []
//   [1]
//   [1, 2]
//   [1, 2, 3]
//   [1, 3]
//   [2]
//   [2, 3]
//   [3]
//  ]

function getAllSubSet(arr, ans, currentIdx, AllList){
  if(currentIdx >= arr.length){
  //  console.log(AllList["values"]);
  console.log(ans);
   AllList["values"].push([...ans]);
    return;
  }

  ans.push(arr[currentIdx]);
  getAllSubSet(arr, ans, currentIdx+1, AllList);
  ans.pop();
  getAllSubSet(arr, ans, currentIdx+1, AllList);

}
let arrObj = {
  values: []
};
getAllSubSet([1,2,3], [], 0, arrObj);
console.log(arrObj);