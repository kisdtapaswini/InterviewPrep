class newArray{
    constructor(){
        this.array = {};
        this.length = 0;
    }

    get(index){
       return this.array[index]  
    }
    push(elem){
        this.array[this.length] = elem;
        this.length++;
        return this.array.length;
    }
    pop(){
        let last  = this.array[this.length-1];
        delete this.array[this.length - 1];
        this.length --;
        return last;
    }

    delete(index){
        let deletedItem = this.array[index];
        this.shiftItems(index);
        return deletedItem;
    }
    shiftItems(index){
        for(let i = index; i < this.length -1; i++){
            this.array[i] = this.array[i+1];
        }
        delete this.array[this.length-1];
      //  this.length--;
    }
    size(){
        'debug '
        return Object.keys(arr1.array).length;
    }
}
let arr1 = new newArray();
arr1.push('Mili');
arr1.push('Eli');
arr1.push('Pitu');

arr1.delete(1);
console.log(arr1.size());


//console.log(arr1.pop());