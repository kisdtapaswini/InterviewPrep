function rowTraverse1(arrMulti, r, c){
    let resultArr = [];
    for(let i = 0; i< arrMulti.length; i++){
        for(let j =0; j < arrMulti[0].length; j++){
            arrMulti[i][j];
        }
    }

}
const arr = [
    [6, 7],
    [8, 9]
 ];
 const row = 1, col = 4;
 //console.log(rowTraverse1(arr, row, col));

 function main(){
    //console.log(inputString);
    let inputString = [ '3', '4 1 2 ', '7 4 4 ', '3 2 4 ', '' ]

    let N = parseInt(inputString.shift());
    inputString = inputString.filter(_=> _!== '');
   // console.log(N);
   let res = '';
    for(let i = 0; i < inputString.length; i++){
        let arr = inputString[i].split(" ");
        inputString[i] = arr.filter(_=> !!_).map(_ => parseInt(_));
    }
    for(let i = 0; i < inputString.length; i++){
        if(i % 2 ==0){
            for(let j = 0; j< inputString[0].length; j++){
                res += inputString[j][i] + " ";
              //  console.log(inputString[j][i]);
            }
        }else{
            for(let j = inputString[0].length-1; j >= 0; j--){
                res += inputString[j][i] + " ";
              //  console.log(inputString[j][i]);
            } 
        }
    }
    
    console.log(res);
    return res;
    // for(let i = 0; i < inputString.length; i++){

    //         if(i % 2 ==0){
    //             for(let j = 0; j< inputString[0].length; j++){
    //                 console.log(inputString[j][i]);
    //             }
    //         }else{
    //             for(let j = inputString[0].length-1; j >= 0; j--){
    //                 console.log(inputString[j][i]);
    //             } 
    //         }
    // }
    
 }

 main();