// Left triangle pattern
// *
// **
// ***
// ****
// *****

function printStarLeftTriangle(n){
    let str = '';
    for(let i =1; i <=n; i++){
        for(let j = 1; j<=i; j++){
            str +='*';
        }
        str += '\n'
    }
    console.log(str);
}
//printStarLeftTriangle(5);

// Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

function printStarDownwardTriangle(n){
    let str = '';
    let i = 1;
    while(i <= n){
        let j = 0;
        while(j<= n-i){
            str +='*'
            j++;
        }
     str +='\n';
     i++;
    }
    console.log(str);
}
printStarDownwardTriangle(5);

