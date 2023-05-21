//Q4. Sort stack using another stack

function sortStack(givenStack){
    let n = givenStack.length;
    let tempStack = new Array();
    for(let i = 0 ; i < n; i++) {
        let givenStackTop = givenStack.pop();
        if(tempStack.length === 0){
            tempStack.push(givenStackTop);
        }else{
            let count = 0;
            while(tempStack[tempStack.length-1] < givenStackTop){
                let tempStackTop = tempStack.pop();
                givenStack.push(tempStackTop);
                count++;
            }
            tempStack.push(givenStackTop);
            while(count >0){
                let top = givenStack.pop();
                tempStack.push(top);
                count--;
            }
        }
    }

    let tempStackLen = tempStack.length-1;
    while(tempStackLen >= 0){
        givenStack.push(tempStack.pop());
        tempStackLen--;
    }
    return givenStack;
}
//console.log(sortStack([[5, 4, 3, 2, 1]]));
//console.log(sortStack([5, 17, 100, 11]));