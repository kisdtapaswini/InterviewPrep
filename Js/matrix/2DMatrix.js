/**
 * Problem 1 :I/p : const arr = [
                     [6, 7],
                     [8, 9]
                    ];
        const r = 1, c = 4;
    o/p : [[6, 7, 8, 9]];
 */
    const arr = [
                    [6, 7, 1],
                    [8, 9, 2],
                    [8, 9, 3]
                 ];
function rowTraverse(arr1){
    // let result = [];
    // console.log(result);
    // let arr1 = [];
    // for(let row = 0; row < arr.length; row++){
    //     for(let col = 0; col < arr[0].length; col++){
    //         arr1.push(arr[row][col]);
    //     }
    // }
    // result.push(arr1);
    // console.log(result);

    let result = [];
    let row = [];
    arr1.forEach(eachArr => {
        eachArr.forEach(each =>{
            row.push(each);
        })
    });
    result.push(row);
    console.log(result);
    
}
//rowTraverse(arr);
/**
 * Problem 2
 * I/p : const arr = [
                    [1, 3, 2],
                    [5, 2, 1, 4],
                    [2, 1]
                    ];
    o/p: [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3 ], [ 4 ], [ 5 ] ]
 */

    function solve(A){
        let n = Number(A);
        let num = Math.floor(Math.sqrt(n));
        let factCount = 0;
        for(let i = 1; i <=num ; i++) {
            if(n % i ==0){
                if(i * i === n){
                    factCount += 1;
                }else{
                    factCount += 2;
                }
            }
        }
           if(factCount > 2 ){
                return 0;
            } else{
                return 1;
            }
	}

// console.log(solve(11));

   function solve1(A){
        let num = Math.floor(Math.sqrt(A));
        let sum = 1;
        for(let i = 2; i <= num; i++){
            if(A % i == 0 ){
               sum = sum + i +Math.floor(A/i);
            }
        }
        if(sum === A){
            return 1;
        }else{
            return 0;
        }
   }
// console.log(solve1(12));



