class Stack{
    constructor(){
        this.stackArr = new Array();
    }
    push(elem){
        this.stackArr.push(elem);
        if(minStack.stackArr.length === 0){
            minStack.stackArr.push(elem);
        }else if(elem <= minStack.stackArr[minStack.stackArr.length - 1]){
            minStack.stackArr.push(elem);
        }
    }
    pop(){
        let x = this.stackArr.pop();
        let y =  minStack.stackArr[minStack.stackArr.length - 1];
        if(x === y){
            minStack.stackArr.pop();
        }
    }
    getMin(){
        return minStack.stackArr[minStack.stackArr.length - 1];
    }
}
let stackAns = new Stack();
let minStack = new Stack();

stackAns.push(3);
stackAns.push(4);
stackAns.push(10);
stackAns.push(2);
stackAns.push(5);
stackAns.push(6);
stackAns.push(1);
stackAns.push(1);

//stackAns

console.log(stackAns.pop());
console.log(stackAns.pop());
console.log(stackAns.pop());
console.log(stackAns.pop());
console.log(stackAns.pop());

console.log(stackAns);
console.log(minStack);

console.log(stackAns.getMin());


