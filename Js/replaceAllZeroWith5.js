function printDigits(num){
    if(num === 0){
        return 5;
    }
    let lastItem = 0;
    let reverseNum = 0;
    while(num > 0){
        lastItem = num%10 ===0 ? 5 : num%10;
        reverseNum = reverseNum*10 + lastItem;
        num = Math.floor(num /10);
    }

    let correctNum = 0;
    lastItem = 0;

    while(reverseNum > 0){
        lastItem = reverseNum%10;
        correctNum = correctNum*10 + lastItem;
        reverseNum = Math.floor(reverseNum /10);
    }

    return correctNum;


}
printDigits(103);