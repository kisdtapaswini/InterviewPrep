// Implement Queue using array

export default class QueueUsingArr {
    constructor(){
        this.queue = new Array();
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }
    enQueue(val){
        let n = this.queue;
        if(this.size === this.queue.length ){
            return 'Queue is full';
        }
        this.rear = (this.rear+1) % n;
        this.queue[this.rear] = val;
        this.size++;
    }
    deQueue(){
        let n = this.queue;
        if(this.size === 0){
            return 'Queue is empty';
        }
        this.front = (this.front + 1 ) % n;
        this.size--;
    }
    getFront(){
        return this.queue(this.front+1);
    }
}

// Implement Queue using stack

class QueueUsingStack {
    constructor(){
        this.stack1 = new Array();
        this.stack2 = new Array();

    }
    enQueue(val){
        this.stack1.push(val);
    }
    deQueue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        this.stack2.pop();
    }

    getFront(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
}
// let q1 = new QueueUsingStack();
// q1.enQueue(4);
// q1.enQueue(-1);
// q1.enQueue(2);
// q1.enQueue(3);
// q1.deQueue();
// q1.deQueue();
// q1.deQueue();

// q1.deQueue();

// q1.enQueue(12);
// q1.enQueue(31);
// console.log(q1.getFront());
