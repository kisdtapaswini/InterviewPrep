function isomorphicString(s,t){
    if(s.length === t.length){
        return false;
    }
    if(check(s, t) && check (t, s)){
        return true;
    } else{
        return false;
    }

    // for (let entry of map.entries()) {
    //     console.log(entry);
    // }

}
function check(s, t){
    let map = new Map();
    for(let eachCh = 0; eachCh < s.length; eachCh++){
        if(map.has(s[eachCh])){
            if(t[eachCh] != map.get(s[eachCh])){
                return false;
            }
        }else{

        }
        map.set(s[eachCh], t[eachCh])
    }
    return true;
}
console.log(isomorphicString('abc','xxx'));