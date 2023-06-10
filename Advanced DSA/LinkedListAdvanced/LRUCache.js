// Least Recently Used
// when we are inserting to null or deleting from null or after deletingit becomes null then ww sue dumm nod ein ace of Linke dlist
//Inserting/Deleting to an empty LL 
// Inserting/Deleting to a LLhaving only one node
// Inserting/Deleting to a LL with more nodes
// When we need to manage all these cases then go fot dummy node (For doubley LL it's more tricky)

class DLL{
    constructor(dataObj, prev, next){
        this.data = dataObj;
        this.prev = prev;
        this.next = next;
    }
}
let head = new DLL(null);// Dummy node(all operation we r going to do with head will be handled by this dummy node)
let tail = new DLL(null);/// Dummy node(all operation we r going to do with tail will be handled by this dummy node)
let LRUsize = 0;
head.next = tail;
tail.prev = head;

let map = new Ma();
let newNode = new DLL(x);
// Insert in case of Miss and LRU has size
function addToTail(newNode){
    newNode.next = tail;
    newNode.prev= tail.prev;
    
    tail.prev = newNode;
    newNode.prev.next = newNode;
}



// Delete
remove(oldNode){
    oldNode.prev.next = oldNode.next;
    oldNode.next.prev = oldNode.prev;

}
remove(head.next); // TO get free space



