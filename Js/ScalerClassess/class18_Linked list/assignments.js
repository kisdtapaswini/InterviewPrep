class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(val){
        let newNode = new Node(val);
        if (this.head == null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;

        }
        this.size++;

    }

    insertAnywhere(val, index){
        let curr = this.head;
        let count = 0; let prev = null;
        while(count < index){
            prev = curr;
            if( curr.next == null){
                break;
            }
            curr = curr.next;
            count++;
        }
        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
    }

    insertAtEnd(val){
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        let newNode = new Node(val);
        curr.next = newNode;
        this.size++;
        return this.size;
    }

    deleteBthNode(index){
        let curr = this.head;
        let prev = curr;
        let count = 0; 
        if(index === 0){
            this.head = curr.next;
        }else{

        while(count < index){
            prev = curr;
            curr = curr.next;
            count++;
        }
            prev.next = curr.next;
      
        }
    }
    print(){

        let curr = this.head;
        let str = '';
        while(curr){
            str += curr.data;
            if(curr.next){
                str += "->";
            }
            curr = curr.next
        }
        console.log(str);
    }

    printReverse(curr, A){
        if(curr === null){
            return curr;
        }
        this.printReverse(curr.next);
        if(curr== A){
            process.stdout.write(curr.data+"");
        }else{
            process.stdout.write(curr.data+"@");

        }
    }
    callPrintReverse(){
        let curr = this.head;
        this.printReverse(curr, this.head);
    }
    
    
}
let ll1 = new LinkedList();
ll1.insertAtFirst(1);
 ll1.insertAtEnd(3);

 ll1.insertAnywhere(2,1);
 ll1.insertAnywhere(4,3);

 ll1.insertAnywhere(5,5);
 ll1.insertAnywhere(6,15);
 //ll1.print();

//ll1.deleteBthNode(1);

//ll1.print();
//ll1.callPrintReverse();
//Q5. Print Reverse Linked List


class A{
    constructor(data1, data2){
        this.data1 = data1;
        this.data2  = data2;
    }
}
let a1 = new A(3, 4);
console.log(a1);