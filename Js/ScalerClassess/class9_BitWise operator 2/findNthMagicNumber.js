function findNthMagicNum(num){
    let magicNum = [5];
    let magic1 = 5;
    for(let i  = 2; i <= num; i++){
         magic1 += Math.pow(5, i);
        if(magic1  < magicNum[]){
            magicNum.push(magic1);  
        }
        magicNum.push(Math.pow(5, i));

    }
    return magicNum;
}
console.log(findNthMagicNum(3));