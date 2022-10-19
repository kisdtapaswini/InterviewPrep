function matchingString (str) {
    let startIdx = 0;
    let endIdx = 0;
    let count = 0;
    for(; endIdx < str.length; endIdx++) {
        let str1 = '';
        if(str[endIdx]==='b'){
            startIdx = endIdx;
            str1 += str[endIdx];
            if((endIdx - startIdx) +1 === 3){
                if(str == 'bob'){
                    count++;
                }
            }
        }

        let windowString = '';
        windowString 
    }

}
matchingString('abobc');