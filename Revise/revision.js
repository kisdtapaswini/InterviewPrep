// class Node{
//     constructor(data, next){
//         this.data = data;
//         this.next = next;
//     }
// }

function Node(val){
    this.val = val;
    this.next = null;
}



function LinkedList(){
    this.head = null;
    this.insertLL = function(node, index){
        let curr = this.head;
        console.log(index);
        if(curr === null){
            this.insertToEmptyLL(node);
        }else if(!index){
            this.insertAtEnd(node);
        }else{
            this.insertAnyWhere(node, index);

        }

            // if(curr.next){
            //     node.next = curr.next;
            //     curr.next = node;
            // }else{
            //     curr.next = node
            // }

        
    }
    this.insertToEmptyLL = function(n){
        this.head = n;
    }
    this.insertAtEnd = function(n){
        let curr = this.head;
        while(curr && curr.next){
            curr = curr.next;
        }
        curr.next = n;

    }

    this.insertAnyWhere = function(n, index){
        let curr = this.head;
        let count = 0;
        let prev = null;
            while(count < index){
                prev = curr;
                curr = curr.next;
                count++;
                if(count === index){
                    break;
                }
            }
            n.next = curr;
            prev.next = n;
    }

    this.printLLIterative = function(){
        let curr = this.head;
        let str = '';
        while(curr.next){
            str+=(curr.val+"->")
            curr = curr.next
        }
        str+=curr.val
        console.log(str);
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

l1.insertLL(node5, 3);

l1.printLLIterative();
