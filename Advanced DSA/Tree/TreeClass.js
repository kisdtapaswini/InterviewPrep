class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let node = new TreeNode(val);
        if(this.root === null){
            this.root = node;
            return this.root
        }
    }
    
}
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
  preOrderTraversal(root) {
    // NLR
    if (root === null) {
      return;
    }
    console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }

  inOrderTraversal(root) {
    if (root === null) {
      return;
    }
    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
  }

  postOrderTraversal(root) {
    if (root === null) {
      return;
    }
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.data);
  }

  isSymentric(root1, root2) {
    if (root1 === null && root2 === null) {
      return true;
    }
    if (root1 === null || root2 === null) {
      return false;
    }
    if (root1.data != root2.data) {
      return false;
    }
    let left = this.isSymentric(root1.left, root2.left);
    let right = this.isSymentric(root1.right, root2.right);

    if (left === false || right === false) {
      return false;
    }
    return true;
  }

  getHeight(root) {
    if (root === null) {
      return 0;
    }
    let leftHt = this.getHeight(root.left);
    let rtHt = this.getHeight(root.right);
    return Math.max(leftHt, rtHt) + 1;
  }

  getMax(root) {
    if (root === null) {
      return Number.MIN_SAFE_INTEGER;
    }
    let leftMax = this.getMax(root.left);
    let rtMax = this.getMax(root.right);
    let max = Math.max(leftMax, rtMax);
    return Math.max(max, root.data);
  }

  insertInBSTLoop(node, root){
    let temp = root;
    let parent = null;
    while(temp){

      parent = temp;
      if(node.data < temp.data){
        temp = temp.left;
      } else{
        temp = temp.right;
      }
    }
    if(node.data > parent.data){
      parent.right = node
    }else{
      parent.left = node;
    }
  }
  
  insertInBSTRecursion(node, root){

  }

  findInOrderPredecessor(node){
    let inOrderPredecessor = node.left;
    let parent = node;
    while(inOrderPredecessor.right){
      parent = inOrderPredecessor;
      inOrderPredecessor = inOrderPredecessor.right;
    }
    return [inOrderPredecessor, parent];
  }
  findPosition(p, ch){
    return p.left === ch ? 'left' : 'right';
  }

  deleteBSTNodeRecursion(root, data, parent){
    if(!root){
      return;
    }
    if(root.data < data){
      parent = root;
      this.deleteBSTNodeRecursion(root.right, data, parent);
    }else if(root.data > data){
      parent = root;
      this.deleteBSTNodeRecursion(root.left, data, parent);
    }else{
      if(!root.left && !root.right){
        let pos = this.findPosition(parent, root);
        parent[pos] = null;
      }else if(!root.left || !root.right){
        let pos = this.findPosition(parent, root);
        parent[pos] = root.left ? root.left : root.right;
      }else if(root.left && root.right){
        let predArr = this.findInOrderPredecessor(root);
        let pred = predArr[0];
        let parentPred = predArr[1];

        let temp1 = root.data;
        root.data = pred.data;
        pred.data = temp1;
        console.log(parentPred);
        this.deleteBSTNodeRecursion(pred, data, parentPred);
 
      }
    }
  }

  DeleteBSTNodeLoop(data){
    let temp = this.root;
   console.log(temp);
    let parent = null;
    while(temp && temp.data !== data){
      parent = temp;
      if(data > temp.data){
        temp = temp.right
      }else{
        temp = temp.left;
      }
    }

    if(!temp.left && !temp.right){
      if(parent.left === temp){
        parent.left = null
      }else{
        parent.right = null;
      }
    }else if(temp.left && temp.right){
      let predArr = this.findInOrderPredecessor(temp);
      let pred = predArr[0];
      let temp1 = temp.data;
      temp.data = pred.data;
      pred.data = temp1; 

      let parent = predArr[1];

      if(parent.left === pred){
        parent.left = pred.left ?  pred.left : pred.right;
      }else{
        parent.right = pred.left ?  pred.left : pred.right;
      }


    }else{
      if(parent.left === temp){
        parent.left = temp.left ?  temp.left : temp.right;
      }else{
        parent.right = temp.left ?  temp.left : temp.right;
      }
    }
  }



}

/*
// Insert in a BST.
let BSTrootNode = new TreeNode(100);

let leftNode_Level2 = new TreeNode(20);
let rightNode_Leve2 = new TreeNode(500);

BSTrootNode.left = leftNode_Level2;
BSTrootNode.right = rightNode_Leve2;

let leftNode_Level3_Left = new TreeNode(10);
let leftNode_Level3_Right = new TreeNode(30);

leftNode_Level2.left = leftNode_Level3_Left;
leftNode_Level2.right = leftNode_Level3_Right;


let t1 = new Tree(BSTrootNode);
t1.inOrderTraversal(BSTrootNode);

let BSTNewNode = new TreeNode(40);

//t1.insertInBSTLoop(BSTNewNode, BSTrootNode);
t1.insertInBSTRecursion(BSTNewNode, BSTrootNode);


console.log("----In order after insertion-----------");
t1.inOrderTraversal(BSTrootNode);*/

// Delete from BST

let rootNode = new TreeNode(2);

let leftNode_Level2 = new TreeNode(1);
let rightNode_Leve2 = new TreeNode(3);


rootNode.left = leftNode_Level2;
rootNode.right = rightNode_Leve2;

// let rootNode = new TreeNode(10);

// let leftNode_Level2 = new TreeNode(5);
// let rightNode_Leve2 = new TreeNode(15);

// rootNode.left = leftNode_Level2;
// rootNode.right = rightNode_Leve2;

// let leftNode_Level3_Left = new TreeNode(3);
// let leftNode_Level3_Right = new TreeNode(7);
// let rightNode_Leve3_Left = new TreeNode(12);
// let rightNode_Leve3_Right = new TreeNode(19);


// leftNode_Level2.left = leftNode_Level3_Left;
// leftNode_Level2.right = leftNode_Level3_Right;
// rightNode_Leve2.left = rightNode_Leve3_Left;
// rightNode_Leve2.right = rightNode_Leve3_Right;


// let leftNode_Level4_Left = new TreeNode(-2);
// let leftNode_Level5_Left = new TreeNode(6);

// let leftNode_Level4_11 = new TreeNode(11);
// let leftNode_Level5_14 = new TreeNode(14);

// let leftNode_Level5_25 = new TreeNode(25);


// leftNode_Level3_Left.left = leftNode_Level4_Left;
// leftNode_Level3_Right.left = leftNode_Level5_Left;
// rightNode_Leve3_Left.left = leftNode_Level4_11;
// rightNode_Leve3_Left.right = leftNode_Level5_14;
// rightNode_Leve3_Right.right = leftNode_Level5_25;

// let leftNode_Level5_13 = new TreeNode(13);
// leftNode_Level5_14.left = leftNode_Level5_13;


 let t1 = new Tree(rootNode);
 let parent = null;

//t1.DeleteBSTNode(15, rootNode, null, rootNode)
t1.deleteBSTNodeRecursion(rootNode, 2, null);
t1.inOrderTraversal(rootNode);

// console.log("----pre order-----------");
// t1.preOrderTraversal(rootNode);

// console.log("----In order-----------");
//t1.inOrderTraversal(rootNode);

// console.log("----Post order-----------");
// t1.postOrderTraversal(rootNode);

/*let rootNode2 = new TreeNode(2);

let leftNode2_Level2 = new TreeNode(5);
let rightNode2_Leve2 = new TreeNode(15);

rootNode2.left = leftNode2_Level2;
rootNode2.right = rightNode2_Leve2;

let leftNode2_Level3_Left = new TreeNode(6);
let leftNode2_Level3_Right = new TreeNode(16);
let rightNode2_Leve3_Left = new TreeNode(7);
let rightNode2_Leve2_Right = new TreeNode(17);

leftNode2_Level2.left = leftNode2_Level3_Left;
leftNode2_Level2.right = leftNode2_Level3_Right;
rightNode2_Leve2.left = rightNode2_Leve3_Left;
rightNode2_Leve2.right = rightNode2_Leve2_Right;*/

//let t2 = new Tree(rootNode2);

// console.log("----pre order-----------");
// t1.preOrderTraversal(rootNode);

// console.log("----In order-----------");
//t2.inOrderTraversal(rootNode2);

// console.log("----Post order-----------");
// t1.postOrderTraversal(rootNode);
//let t3 = new Tree(rootNode);
//console.log(t3.getMax(rootNode));
//console.log(t3.getHeight(rootNode));

//console.log(t3.isSymentric(rootNode, rootNode2));
