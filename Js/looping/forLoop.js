/**
 * Print Pattern 1
 *      ******
 *      **--**
 *      *----*
 */
function printPattern1(N) {
    for (let i = 0; i < N; i++) {
        let StarCount = N - i;
        let spaceCount = 2 * i;

        let str = '';
        for (let j = 1; j <= StarCount; j++) {
            str += '*';
        }
        for (let j = 1; j <= spaceCount; j++) {
            str += ' ';
        }
        for (let j = 1; j <= StarCount; j++) {
            str += '*';
        }
        console.log(str);
    }
}
//printPattern1(3);

/**
 * Print Pattern 2
 *      *----*
 *      **--**
 *      ******
 */
function printPattern2(N) {
    for (let i = 1; i <= N; i++) {
        let spaceCount = (N - i) * 2;

        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        for (let j = 1; j <= spaceCount; j++) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}
// printPattern2(5);

/** Print pattern 3
 * 
 *              ********** // 0 spaces

                ****__**** // 2 spaces

                ***____*** // 4 spaces

                **______** // 6 spaces

                *________* // 8 spaces
 */
function printPattern3(N) {
    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 1; j <= N - i; j++) {
            str += '*';
        }
        for (let j = 1; j <= 2 * i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= N - i; j++) {
            str += '*';
        }
        console.log(str);
    }

}
// printPattern3(2);

function printPattern4(N) {
    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 1; j <= N - i; j++) {
            if (i === 0 || j === N - i || j === 1) {
                str += '*';
            } else {
                str += ' ';
            }

        }
        console.log(str);
    }

}
// printPattern4(7);

/**
 * Print star
 * 
 * */
//      *
//     ***    
//    *****   
// ***********
//  ********* 
//   *******  
//   *******  
//  ********* 
// ***********
//    *****   
//     *** 
//      *

function printStartPattern(N) {
    for (let i = 1; i <= N; i++) {
        let str = '';
        for (let j = 1; j <= 2 * N - i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            str += "*";
        }
        console.log(str);
    }
    for (let i = N; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= N - i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= 2 * i + N + 2; j++) {
            str += '*';
        }
        console.log(str);
    }

    for (let i = 1; i <= N; i++) {
        let str = '';
        for (let j = 1; j <= N - i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= 2 * i + N + 2; j++) {
            str += '*';
        }
        console.log(str);
    }

    for (let i = N; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= 2 * N - i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            str += "*";
        }
        console.log(str);
    }
}
//printStartPattern(3);

/**
 *   Print cross pattern
 */
//  *   *
//  * * 
//   *
//  * *
// *   *
function printCrossPattern(N) {
    for(let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            if(i === j || (i+j ===4)){
                str += "*";
            }else {
                str +=" "

            }
        }
        console.log(str);
    }

}
// printCrossPattern(5);

function printNPattern(N) {
    for(let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            if( j ===0 || j ==N-1 || i === j){
                str += "*";
            }else {
                str +=" "

            }
        }
        console.log(str);
    }

}
//printNPattern(7);

function printSwastikPattern(N) {
    for(let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            if( i === parseInt(N/2)  
            || j === parseInt(N/2) ||
            (i <=parseInt(N/2) && j === 0) ||
            (i ===N-1 && j <=parseInt(N/2)) ||
            (i > parseInt(N/2) && j === N-1) ||
            (i === 0 && j > parseInt(N/2)))
            {
                str += "* ";
            }else {
                str +="  ";

            }
        }
        console.log(str);
    }

}
//printSwastikPattern(5);


/**
 * Easy Pattern practice
 */
function easyPattern1(n){
    for(let i = 1; i<=n ; i++){
        for (let j = 1; j<=i; j++){
            if(j&2 ===0)
            process.stdout.write(" ");
        }
        console.log();

    }

}
//console.log(easyPattern1(5));
module.exports = {
    solve: function(){
        this.print(5);
    },
    print: function(n) {
        if(n <=0){
            return;
        }
        console.log(n);
        this.print(n-1);
    }
}
//module.exports.solve();

function maxSumSubArray(arr, B) {
        let startId = 0
        let MaxSum = 0;
        let sum = 0;
        for(let endIdx = 0; endIdx < arr.length; endIdx++){
            sum += arr[endIdx];
            while(sum > B){
                sum = sum - arr[startId++];
            }
            MaxSum = Math.max(MaxSum, sum);
        }
        return MaxSum;
}
// console.log(maxSumSubArray([2,2,2], 1));





