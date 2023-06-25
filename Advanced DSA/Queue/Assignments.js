
class QueueUsingArr {
    constructor(){
        this.queue = new Array();
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    enQueue(val){
        let n = this.queue.length;
        // if(this.size === this.queue.length ){
        //     return 'Queue is full';
        // }
        this.rear = (this.rear+1);
        this.queue[this.rear] = val;
        this.size++;
    }

    deQueue(){
        let n = this.queue.length;
        if(this.size === 0){
            return 'Queue is empty';
        }
      //  this.front = (this.front + 1 ) % n;
        this.front = this.front + 1;
        this.size--;
    }

    getFront(){
        return this.queue[this.front+1];
    }
}

//Q1. Perfect Numbers

    // let q1 = new QueueUsingArr();
    // q1.enQueue(4);
    // q1.enQueue(-1);
    // q1.enQueue(2);
    // console.log(q1);

    function solve(A){
        let q1 = new QueueUsingArr();
        q1.enQueue("1");
        q1.enQueue("2");
        let ele1 = "1";
        let ele2 = "2";
        let count = 2;
    
        while(count < A){
            let ele = q1.getFront();
            q1.deQueue();

            ele1 = ele + "1";
            q1.enQueue(ele1);

            ele2 = ele + "2";
            q1.enQueue(ele2);

            count = count+2;
        }
        if(A % 2 === 0){
            return ele2 + ele2.split("").reverse().join("");
        }else{
            return ele1 + ele1.split("").reverse().join("");
         }
    }
    console.log(solve(10));
  






//Sliding window Max using Queue