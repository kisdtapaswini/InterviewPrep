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
printStartPattern(3);