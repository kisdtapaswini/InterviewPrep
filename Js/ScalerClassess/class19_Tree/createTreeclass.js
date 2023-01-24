// class Node {
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//         this.isVisited = false;
//     }
// }
// class Tree{
//     constructor(data){
//         this.root = new Node(data);
//     }
//     isEmpty(){
//         return this.root ? false : true;
//     }
//     size(){

//     }
//     // Insert
//     insertNewNode(data){
//         this.insertNewRec(this.root, data);
//     }
//     insertNewRec(rt, data){
//         rt.isVisited = true;
//         if (rt.left == null) {
//             rt.left = new Node(data);
//             return;
//         }else if (rt.right == null) {
//             rt.right = new Node(data);
//             return;
//         }
//         this.insertNewRec(rt.left, data);
//         // if(rt.left.isVisited === false){
//         //     this.insertNewRec(rt.left, data);

//         // }else{
//         //     this.insertNewRec(rt.rigth, data); 
//         // }

//     }       

//     preOrderTraverse(rt){
//         if(rt === null){
//             return;
//         }
//         process.stdout.write(rt.data + " ");
//         this.preOrderTraverse(rt.left);
//         this.preOrderTraverse(rt.right);
//     }

//     getNodeCounts(rootLoc){
//         let totalCount ={'val' : 0};
//         this.getMaxNodeCount(rootLoc, totalCount, 0);
//         return totalCount.val;
//     }
//     getMaxNodeCount(A, tc, maxAnc){
//         if(A === null){
//             return;
//         }
//         if(A.data > maxAnc){
//             tc.val +=1;
//             maxAnc = A.data;
//         }
//         this.getMaxNodeCount(A.left, tc, maxAnc);
//         this.getMaxNodeCount(A.right, tc, maxAnc);
//     }
// }
// let t1 = new Tree(5);

// t1.insertNewNode(12);
// t1.insertNewNode(3);
// t1.insertNewNode(14);
// t1.insertNewNode(5);
// t1.insertNewNode(6);
// t1.insertNewNode(7);

// t1.preOrderTraverse(t1.root);
// console.log();
// console.log(t1.getNodeCounts(t1.root));
function baz(){
    console.log("baz");
    bar();
}
function bar(){
    console.log("bar");
    foo();
}
function foo(){
    console.log("foo");
}
baz();