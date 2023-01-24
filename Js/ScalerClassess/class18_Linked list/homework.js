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
