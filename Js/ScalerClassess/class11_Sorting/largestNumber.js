function largestNum(A){
    A.sort((first, second) =>{
        let firstSecond = ''+ first + second;
        let secondFirst = ''+second + first;
        return firstSecond > secondFirst ? -1 : 1;
    })

}
let B = [8,89];
largestNum(B);
let res = B.join(" ");
console.log(res);

//console.log(largestNum([3, 30, 34, 5, 9]));