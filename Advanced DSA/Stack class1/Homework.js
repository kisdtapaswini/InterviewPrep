//Q1. Check two bracket expressions












// function solve (A1, B1){
//     let stackA = pushToStack(A1);
//     let stackB = pushToStack(B1);
//     while(stackA.length && stackB.length){
//         if(stackA.pop() !== stackB.pop()){
//             return 0;
//         }
//     }
//     return 1;

// }
// function pushToStack(A){
//     let stack = new Array();
//     let withinBracket = false;
//     for(let i = 0; i < A.length; i++){
//         if(A[i] === "(" && stack[stack.length-1 == "-"]){
//             withinBracket = true;
//             continue;
//         }
//         if(A[i] === ")" ){
//             withinBracket = false;
//             continue;
//         }
        
//         if(withinBracket){
//             if(A[i] === "+"){
//                 stack.push("-");
//             }else if(A[i] === "-"){
//                 stack.push("+");
//             }else{
//                 stack.push(A[i]);
//             }
//         }
//         else{
//             stack.push(A[i]);   
//         }
  
//     }
//     return stack;
// }
// //console.log(solve("-(a+b+c)", "-a-b-c"))
// console.log(solve("(c-d)", "c-d"))