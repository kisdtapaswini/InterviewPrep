class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
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
        return this.head;
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
        let prev = null;
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

    mergeTwoSorted(h1, h2){
        let curr1 = h1; 
        let curr2 = h2;
        let currAns;
        let ansHead;

        if(curr1.data < curr2.data){
            currAns = curr1;
            curr1 = curr1.next
        }else{
            currAns = curr2;
            curr2 = curr2.next 
        }
        ansHead = currAns;
         while(curr1 && curr2){
          //  console.log(curr1.data + " : " + curr2.data);
            if(curr1.data < curr2.data){
                currAns.next = curr1;
                curr1 = curr1.next;
            } else{
                currAns.next = curr2;
                curr2 = curr2.next;
            }
            currAns = currAns.next;
        }

        while(curr1){
            currAns.next = curr1;
            curr1 = curr1.next;
            currAns = currAns.next;
        }
        while(curr2){
            currAns.next = curr2;
            curr2 = curr2.next;
            currAns = currAns.next;
        }

        let curr = ansHead;
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

    //    mergeTwoSorted list using dummy node

    mergeTwoSorted2(h1, h2){
        let currA = h1;
        let currB = h2;
        let dummyNode = new Node();
        let currTail = dummyNode;
        while(true){
            if(!currA){
                currTail = currB;
                break;
            }else if(!currB){
                currTail = A;
                break;
            }

            if(currA.data <= currB.data){
                currTail.next = currA;
                currA = currA.next
            }else{
                currTail.next = currB;
                currB = currB.next;
            }
            
            currTail = currTail.next;
        }
        return dummyNode.next;
    }

    reverseLL(){
        let curr = this.head;
        let prev = null;
        let ahead = null
        while(curr){
            ahead = curr.next;
            curr.next = prev;
            prev = curr;
            curr = ahead;
        }
     
        this.head = prev;
    }

    reverseInBetween(idx1, idx2){
        let curr = this.head;
        let count = 0;
        let before = null;
        while(count < idx1){
            count ++;
            before = curr;
            curr = curr.next;
        }

        let ahead = null;
        let prev = null;
        let after = curr;
        while(count <= idx2){
            count++;
            ahead = curr.next;
            curr.next = prev;
            prev = curr;
            curr = ahead;
        }
        if(before)
        before.next = prev;
        if(after)
        after.next = ahead;
    }

    findMid(){
        let slow = this.head;
        let fast = this.head;
        let mid = 0, end = 0;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            mid++;
            end +=2;
        }
        return [mid, end, slow];
    }

    checkIfPalindrome(){
        let mid = this.findMid();
        this.reverseInBetween(mid[0]+1, mid[1]);
        let count = 0;
        let midNode = mid[2].next;
        let start = this.head

        while(count < mid[0] && midNode){
            if(start.data !== midNode.data){
                return 0;
            }
            count++;
            midNode = midNode.next;
            start = start.next;
        }
        return 1;
    }

    unionOfTwoLL(h1, h2){
        let curr1 = h1;
        let curr2 = h2;
        let prev = null;
        let set = new Set();
        while(curr1){
            set.add(curr1.data);
            prev = curr1;
            curr1 = curr1.next;
        }

        while(curr2){
            if(!set.has(curr2.data)){
                prev.next = curr2;
                prev = prev.next;
            }
            curr2 = curr2.next;
        }
        this.head = h1;
        this.print();
    }

    intersectionOfTwoLL(h1, h2){
        let curr1 = h1;
        let curr2 = h2;
        let set = new Set();
        while(curr1){
            set.add(curr1.data);
            curr1 = curr1.next;
        }
        let count = 0;
        while(curr2){
            if(set.has(curr2.data)){
                count++;
            }else{
                this.head = h2;
                this.deleteBthNode(count);
            }
            curr2 = curr2.next;
        }
        this.print();
    }

    removeDuplicates(){

    }
    craeteLoop(){
        let curr = this.head;
        let curr1 = this.head;
        let count = 0;
        while(curr.next != null){
            curr = curr.next;
        }
        while(count < 2){
            curr1 = curr1.next;
            count++;
        }
        curr.next = curr1;
    }

    printLoop(){
        let curr = this.head;
        let set = new Set();
        let str = '';
        while(curr){
            str += curr.data;
            if(curr.next){
                str += "->";
            }
            if(set.has(curr.next)){
                str += curr.next.data;
                break;
            }
            set.add(curr.next);
            curr = curr.next
        }
        console.log(str);
    }

    detectCycleUsingMap(){
        let curr = this.head;
        let set = new Set();
        let ans;
      //  map.add(this.head);
        while(curr){
            // if(map.has(curr) != ){
            //     ans = map.get(curr.next);
            //     break;
            // }
            set.set(curr);
            curr = curr.next

        }
        let i = 0;
        let curr1 = this.head;
        while(i <= count){
            curr1 = curr1.next;
            i++;
        }
        return ans;
    }

    detectCycle(){
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                slow = this.head;
                while(fast != slow){
                    fast = fast.next;
                    slow = slow.next;
                }
                return slow;
            }
        }
        return null;
    }

    getRandom(){
        let randIndx = (Math.floor(Math.random() * (5 - 1 + 1)) + 1) % this.size;
        console.log(randIndx);

        let count = 0;
        let curr = this.head;
        while(count < randIndx){
            count++;
            curr = curr.next;
        }
        console.log(curr);
    }
}

let ll1 = new LinkedList();
 ll1.insertAtFirst(1);
 ll1.insertAtEnd(2);
 ll1.insertAtEnd(4);
 ll1.insertAtEnd(6);
 ll1.insertAtEnd(10);
ll1.print();

// ll1.craeteLoop();
// ll1.printLoop();
 ll1.getRandom();
 //console.log(ll1.findMid());
 //ll1.reverseInBetween(1, 4);
 //ll1.print();
 //console.log(ll1.checkIfPalindrome());

//   let ll2 = new LinkedList();
//   let head2 = ll2.insertAtFirst(2);
// // console.log(head2);

//  ll2.insertAtEnd(3);
//  ll2.insertAtEnd(4);
//  ll2.insertAtEnd(1);
//  ll2.insertAtEnd(5);

//  ll2.print();

 //let ll3 = new LinkedList();
 //ll3.unionOfTwoLL(head1, head2);
 //ll1.intersectionOfTwoLL(head1, head2);

//  let ll2 = new LinkedList();
//  let head2 = ll2.insertAtFirst(2);
// // console.log(head2);

//  ll2.insertAnywhere(3,1);
//  ll2.insertAnywhere(4,2);
//  ll2.print();

//  let ll3 = new LinkedList();
//  ll3.head = ll3.mergeTwoSorted2(head1, head2);
//  ll3.print();

//ll1.deleteBthNode(1);

//ll1.callPrintReverse();
//Q5. Print Reverse Linked List

