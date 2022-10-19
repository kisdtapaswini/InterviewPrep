function checkPwdStrength (pwd) {
    // console.log(pwd[1].charCodeAt(0));
    let alphaCount = 0;
    let numericCount = 0;
    let specialCharCount = 0;
    alphaCount = getAlphaCount(pwd);
    numericCount = getNumericCount(pwd);
    specialCharCount = getSpecialCharCount(pwd);
    // console.log(alphaCount);
    // console.log(numericCount);
    // console.log(specialCharCount);
    if(pwd.length < 8 && alphaCount >1 && numericCount == 0 && specialCharCount ==0){
        return 'WEAK';
    }else if(pwd.length >= 8 && alphaCount >1 && numericCount > 1 && specialCharCount ==0) {
        return "MODERATE";
    } else if((pwd.length >= 8 && alphaCount >1 && numericCount > 1 && specialCharCount > 1)){
        return "STRONG";
    }else{
        return "INVALID";
    }
}
function getAlphaCount(pwd){
    let alphaCount = 0;
    for(let eachCh = 0; eachCh < pwd.length ; eachCh++) {
        if(65 <= pwd[eachCh].charCodeAt(0) && pwd[eachCh].charCodeAt(0) <=90 || 97 <= pwd[eachCh].charCodeAt(0) &&pwd[eachCh].charCodeAt(0) <=122){
            alphaCount++; 
        }
    }
    return alphaCount;
}

function getNumericCount(pwd){
    let numericCount = 0;
    for(let eachCh = 0; eachCh < pwd.length ; eachCh++) {
        if(48 <= pwd[eachCh].charCodeAt(0) && pwd[eachCh].charCodeAt(0) <=57){
            numericCount++;
        }
    }
    return numericCount;
}
function getSpecialCharCount(pwd){
    let specialCharCount = 0;
    for(let eachCh = 0; eachCh < pwd.length ; eachCh++) {
        if(!(65 <= pwd[eachCh].charCodeAt(0) && pwd[eachCh].charCodeAt(0) <=90) &&
         !(97 <= pwd[eachCh].charCodeAt(0) && pwd[eachCh].charCodeAt(0)<=122) &&
         !(48 <= pwd[eachCh].charCodeAt(0) && pwd[eachCh].charCodeAt(0) <=57)){
            specialCharCount++;
        }
    }
    return specialCharCount;
}
console.log(checkPwdStrength("hj"));
//checkPwdStrength("12AA@#%^&12WS*");