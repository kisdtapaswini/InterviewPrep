//1.
    let arr = [];

function inorderTraversal(A){
    inorderTraversalRec(A);
 }
 function inorderTraversalRec (A){
      if(A === 0){
         return;
     }
    inorderTraversalRec(A-1);
    arr.push(A);
    //inorderTraversalRec(A.right);
 }
 inorderTraversal(5);
 console.log(arr);