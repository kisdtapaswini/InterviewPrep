function checkForAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    // 1way to check
    // if(str1.split('').sort().join('') === str2.split('').sort().join('')){
    //     return true
    // }

    // 2nd way using map
    let mp1 = new Map();
    let mp2 = new Map();
    for(let ch = 0; ch < str1.length; ch++) {
        if(mp1.has(str1[ch])){
            mp1.set(str1[ch], mp1.get(str1[ch])+1)
        }
        mp1.set(str1[ch], 1);

        if(mp2.has(str2[ch])){
            mp2.set(str2[ch], mp1.get(str2[ch])+1)
        }
        mp2.set(str2[ch], 1);
    }
    // Iterate map
    //   for (const [key, value] of mp1.entries()) {
    //     console.log(key, value);
    //   }
    //   for (const [key, value] of mp2.entries()) {
    //     console.log(key, value);
    //   }
    if (mp1.size !== mp2.size) {
        return false;
    }

    if(checkForMapEquality(mp1,mp2)){
        return true;
    }
    return false
}
function checkForMapEquality(mp1, mp2){
    for(const [key, value] of mp1) {
        let mp2TestVal = mp2.get(key);
        console.log(mp2TestVal)
        if(mp2TestVal !== value || (mp2TestVal === undefined && !mp2.has(key))) {
            return false;
        }
    }
    return true;
}
console.log(checkForAnagram('abc', 'acd'));