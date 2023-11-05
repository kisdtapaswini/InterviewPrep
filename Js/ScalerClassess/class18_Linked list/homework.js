// Q3. Compare Linked List
function compareLL(A, B){
    let currA = A;
    let currB = B;
    while(currA !== null && currB !== null){
        if(currA.data !== currB.data){
            return 0;
        }
        currA = currA.next;
        currB = currB.next;
    }
    if(currA === null && currB === null){
        return 1;
    }
    return  0;
}
//Q2. Check sorted Linked List
function isSorted(A){
    let curr = A;
    let prev = null;
    while(curr !== null){
        if(prev !== null && prev.data > curr.data){
            return false;
        }
        prev = curr;
        curr = curr.next;
    }
    return true;
}
//Q1. K-th element in linked list
function findKthElem(A, B){
    let count = 0;
    let curr = A;
    while(curr){
        if(count === B){
            return curr.data;
        }
        curr = curr.next;
        count++;
    }
}

//Q1. Remove Nth Node from List End

function removeNthFromEnd(A, B){
    let pt1, pt2;
    pt1, pt2 = A;
    let count = 1;
    while(count < B){
        count++;
        pt1 = pt1.next;
        if(!pt1){
            return A.next;
        }
    }
    let prev = null;
    while(pt1 && pt1.next){
        pt1 = pt1.next;
        prev = pt2;
        pt2 = pt2.next;
    }

    if(!prev){
        return A.next;
    }
    prev.next = pt2.next;
    return A;
}

//removeNthFromEnd(head, 2)

//Q2. Remove Duplicates from Sorted List

function removeDuplicateLL(A){
    let p1 = A;
    let p2 = A.next;
    while(p2){
        if(p1.data === p2.data){
            p1.next =p2.next;
        }else{
            p1 = p2;
        }
        p2 = p2.next;
    }
}

//Q4. Reverse Link List II
function reverseInBetween(A, B, C){
    let count = 1;
    let tmp1 = A;
    let tmp2 = A;
    let curr = A;
    let prev = null;

    while(count < B){
        tmp1 = curr;
        curr = curr.next;
        count++;
    }

    tmp2 = curr;
    while(B <= C){
        let ahead = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ahead;
        B++;
    }

    tmp2.next = curr;
    tmp1.next = prev;
    return A;
}

//Q3. K reverse linked list


