class Stack{
    arr;
    constructor(){
        this.stackArr = new Array();
        this.size = 0;
    }
    add(item){
        this.stackArr.push(item);
        size++;
    }
    delete(){
        if(size === 0){
            return "Stack is empty";
        }
        size--;
        this.stackArr.pop();
    }
    peek(){
        return this.stackArr[size-1];
    }
    isEmpty(){
        return size===0 ? true: false;
    }
    printStack(){
        for(){
            
        }
    }

}