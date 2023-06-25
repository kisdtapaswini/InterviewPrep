/**
 * InOrder = [15, 1, 5, 2, 12, 10, 7, 6, 9];
 * PostOrder = [15, 1, 12, 2, 5, 7, 9, 6, 10];
 *
 * Construct a Binary Tree
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildBinaryTreeFromPost(inOrder, postOrder) {
  let n1 = inOrder.length-1;
  let n2 = postOrder.length-1;
  let map = new Map();
  inOrder.forEach((element, index) => {
    map.set(element, index);
  });
  return createBinaryTree(inOrder, 0, n1, postOrder, 0, n2, map)
}
function createBinaryTree(In, startIn, endIn, Po, startPo, endPo, map ){
    if((startIn > endIn ) || (startPo > endPo)){
        return null;
    }
    let root = Po[endPo];
    let newRoot = new TreeNode(root);
    let idx = map.get(root);
    let noOfElems = idx - startIn;
    newRoot.left = createBinaryTree(In, startIn, idx -1, Po, startPo, startPo + noOfElems -1 , map);
    newRoot.right = createBinaryTree(In, idx+1, endIn, Po, startPo+noOfElems, endPo -1, map);
    return newRoot;
}

let inOrder = [15, 1, 5, 2, 12, 10, 7, 6, 9];
let postOrder = [15, 1, 12, 2, 5, 7, 9, 6, 10];

let t1 = buildBinaryTreeFromPost(inOrder, postOrder);
//inOrderTraversal(t1);

function inOrderTraversal(root) {
    if (root === null) {
      return;
    }
    inOrderTraversal(root.left);
    console.log(root.data);

    inOrderTraversal(root.right);
  }


  /**
 * InOrder = [15, 1, 5, 2, 12, 10, 7, 6, 9];
 * PreOrder = [10, 5, 1, 15, 2, 12, 6, 7, 9];
 *
 * Construct a Binary Tree
 */
  function buildBinaryTreeFromPre(inOrder, preOrder) {
    let n1 = inOrder.length-1;
    let n2 = preOrder.length-1;
    let map = new Map();
    inOrder.forEach((element, index) => {
      map.set(element, index);
    });
    return createBinaryTreePre(inOrder, 0, n1, preOrder, 0, n2, map)
  }

  function createBinaryTreePre(In, startIn, endIn, Pre, startPre, endPre, map){
    if((startIn > endIn ) || (startPre > endPre)){
      return null;
  }
    let root = Pre[endPre];
    let newNode = new TreeNode(root);
    let idx = map.get(root);
    let noOfelems = idx - startIn;
    newNode.left = createBinaryTreePre(In, startIn, idx -1, Pre, startPre+1, startPre+noOfelems, map);
    newNode.right = createBinaryTreePre(In, idx+1, endIn, Pre, startPre+noOfelems+1, endPre);
    return newNode;
  }

let preOrder =  [10, 5, 1, 15, 2, 12, 6, 7, 9];

let t2 = buildBinaryTreeFromPre(inOrder, preOrder);
postOrderTraversal(t2);

function postOrderTraversal(root) {
    if (root === null) {
      return;
    }
    inOrderTraversal(root.left);
    inOrderTraversal(root.right);
    console.log(root.data);

  }