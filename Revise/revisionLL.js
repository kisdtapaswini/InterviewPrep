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
        if(curr === null){
            this.insertToEmptyLL(node);
        }else if(!index){
            this.insertAtEnd(node);
        }else{
            this.insertAnyWhere(node, index);
        }
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

    this.printLLIterative = function(head){
        let curr = head;
        let str = '';
        while(curr.next){
            str+=(curr.val+"->")
            curr = curr.next
        }
        str+=curr.val
        console.log(str);
    }

    this.mergeSortLL = function(A){
        if(A === null || A.next === null){
            return A;
        }
        let [mid] = this.findMid(A);
        let head1 = this.mergeSortLL(start, mid);
        let head2 = this.mergeSortLL(mid.next, end);
        this.mergeTwoSortedLL(head1, head2);
    }
    this.findMid = function(head){
        let slow = head;
        let fast = head;
        while(fast && fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return fast.next === null ? [slow,fast] : [slow, fast.next];

    }

    this.mergeTwoSortedLL = function(head1, head2){
        let curr1 = head1;
        let curr2 = head2;
        let resultHead = new Node(-1);
        let ansPtr = resultHead;
        while(curr1 && curr2){
            if(curr1.data < curr2.data){
                ansPtr.next = curr1;
                curr1 = curr1.next;
            }else{
                ansPtr.next = curr2;
                curr2 = curr2.next;
            }
           
            ansPtr = ansPtr.next;
        }

        while(curr1){
                ansPtr.next = curr1;
                curr1 = curr1.next; 
                ansPtr = ansPtr.next;
        }

        while(curr2){
                ansPtr.next = curr2;
                curr2 = curr2.next; 
                ansPtr = ansPtr.next;
        }

        return ansPtr.next;
    }

    this.swapPairs = function(head){
        let curr = head;
        let prev = null;
        while(curr && curr.next && curr.next.next){
            prev = curr;
            curr = curr.next;
            let ahead = curr.next.next;
            curr.next = prev;
        prev.next = ahead;
            curr = ahead;
        }
        if(curr && curr.next){
            
        }

    }
}

const l1 = new LinkedList();
const node1= new Node(1);
const node2= new Node(2);
const node3= new Node(3);
const node4= new Node(4);
// const node5= new Node(4);
// const node6= new Node(10);
// const node7= new Node(11);
// const node8= new Node(2);

l1.insertLL(node1);
l1.insertLL(node2);
l1.insertLL(node3);
l1.insertLL(node4);
l1.swapPairs(l1.head);
// l1.insertLL(node5);
// l1.insertLL(node6);
// l1.insertLL(node7);
// l1.insertLL(node8);


// const l2 = new LinkedList();
// const nodeL1 = new Node(2);
// const nodeL2 = new Node(4);
// const nodeL3 = new Node(6);
// const nodeL4= new Node(8);
// const nodeL5= new Node(10);

// l2.insertLL(nodeL1);
// l2.insertLL(nodeL2);
// l2.insertLL(nodeL3);
// l2.insertLL(nodeL4);
// l2.insertLL(nodeL5);

//l2.printLLIterative(l2.head);
// let l3 = l2.mergeTwoLL(l1.head, l2.head);

// l2.printLLIterative(l3);
