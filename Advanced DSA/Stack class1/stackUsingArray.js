// Stack Using Array

class arrStack {

    constructor(){
        this.stack = [];
        this.top = -1;
    }

    push(val){
        if(this.top === this.stack.length - 1){
            return 'Stack overflows';
        }
        this.top++;
        this.stack[this.top] = val;
    }

    pop(){
        if(this.top === -1){
            return 'Stack under flows';
        }
        this.top--;
    }
    getTop(){
        return this.stack[this.top];

    }
    print(){
        this.stack.forEach((elem) =>{
            console.log(elem);
        });
    }
}
// let s1 = new arrStack();
// s1.push(1);
// s1.push(3);
// s1.push(2);
// s1.push(5);
// s1.push(6);
// s1.print();
// console.log("------");
// s1.pop();
// s1.print();
// console.log("------");

// console.log(s1.getTop());


