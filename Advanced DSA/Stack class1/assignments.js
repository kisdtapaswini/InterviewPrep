//Q1. Balanced Paranthesis

function balancedParanthesis(A){
    let stack = new Array();
    let top = -1;
    let count = 0;
    for(let i = 0; i < A.length; i++){
        let element = element;
      if(element == '{' || element == '(' || element == '['){
        top++;
        stack[top] = element;
      }else if((element == '}' || element == ')' || element == ']')){
        if(element == '}' && stack[top] === '{'){
            top--;
        } else if(element == ')' && stack[top] === '('){
            top--;
        } else if(element == ']' && stack[top] === '['){
            top--;
        }else{
            return 0;
        }
        } 
    }
    if(top === -1 && A.l){
        return 1;
    }else{
        return 0;
    }
}
//console.log(balancedParanthesis('))))))))'));
//console.log(balancedParanthesis('{[[}[]}(]}){'));


//Q2. Double Character Trouble

function doubleCharTrouble(A){
    let stack = new Array();
    let top = -1;
    for(let i = 0; i < A.length; i++){
        let item = element;
        if(top > -1 && item === stack[top]){
            top--;
        }else{
            top++;
            stack[top] = item;
        }
    }
    let str = '';
    for(let i = 0; i <= top; i++){
        str+= stack[i];
    }
    return str;

}
//console.log(doubleCharTrouble("abccbc"));

//Q3. Evaluate Expression

function evaluatePostFoxOpe(A){
    let stack = new Array();
    let top = -1;
    A.forEach(element => {
      if(isNaN(parseInt(element)) ){
        let operand1 = stack[top];
        stack.pop();
        top--;
        let operand2 = stack[top];
        stack.pop();
        top--;
        let result;
        if(element === "+"){
           result = operand1 + operand2;
        } else if(element === "-"){ 
            result = operand1 - operand2;
        } else if(element === "*"){
            result = operand1 * operand2;
        } else if(element === "/"){
            result = operand2 / operand1;
        }
        top++;
        stack[top] = parseInt(result);
        console.log(stack);
      }else {
        top++;
        stack[top] = parseInt(element)
      }
    });
   return stack[top];
}
//console.log(evaluatePostFoxOpe([ "4", "13", "5", "/", "+" ]));
