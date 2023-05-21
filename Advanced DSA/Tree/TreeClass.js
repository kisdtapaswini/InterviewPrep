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