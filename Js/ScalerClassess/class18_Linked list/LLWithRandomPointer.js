class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    insertLL(node, index){
        let curr = this.head;
        if(curr === null){
            this.insertToEmptyLL(node);
        }else if(!index){
            this.insertAtEnd(node);
        }else{
            this.insertAnyWhere(node, index);
        }
    }
    insertToEmptyLL(n){
        this.head = n;
    }
    insertAtEnd(n){
        let curr = this.head;
        while(curr && curr.next){
            curr = curr.next;
        }
        curr.next = n;
    }

    insertAnyWhere(newNode, index){
        let curr = this.head;
        let count = 0;
        let prev = null;
            while(count < index){
                prev = curr;
                curr = curr.next;
                count++;
            }
            newNode.next = curr;
            prev.next = newNode;
    }


    printLLIterative(head){
        let curr = head;
        let str = '';
        while(curr.next){
            str+=(curr.val+"->")
            curr = curr.next
        }
        str+=curr.val
        console.log(str);
    }

    cloneWithRandomPointer(sourceHead){
        let curr = sourceHead;
        let clonedHead = null;
        let temp = clonedHead;
        let map = new Map();
        while(curr){
            let newNode = new Node(curr.val);
            if(!clonedHead){
                clonedHead = newNode;
                temp = newNode;
            }else{
                temp.next = newNode;
                temp = temp.next;
            }
            map.set(curr, newNode);
            curr = curr.next;
        }
        // console.log(clonedHead);
        // this.printLLIterative(clonedHead);

       curr = sourceHead;
       temp = clonedHead;
       while(curr){
        let newNodeRef = map.get(curr.random);
        temp.random = newNodeRef;
        curr = curr.next;
        temp = temp.next
       }
       return clonedHead;
    }
}

const l1 = new LinkedList();
const node1= new Node(1);

const node2= new Node(5);

const node3= new Node(7);

const node4= new Node(9);

const node5= new Node(10);


l1.insertLL(node1);
l1.insertLL(node2);
l1.insertLL(node3);
l1.insertLL(node4);

l1.insertLL(node5, 2);

node1.random = node5;
node2.random = node1;
node3.random = node5;
node4.random = node2;
node5.random = node3;
//l1.printLLIterative(l1.head);
console.log(l1.head);

console.log("--------------------------");

let head = l1.cloneWithRandomPointer(l1.head);
console.log(head);
