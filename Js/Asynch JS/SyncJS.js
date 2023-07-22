
function doStep1(data){
    return data + 1;
}

function doStep2(data){
    return data + 2;
}

function doStep3(data){
    return data + 3;
}

  function doOperation() {
    let ans = 0;
    ans = doStep1(ans);
    ans = doStep2(ans);
    ans = doStep3(ans);
    console.log(`Ans is ${ans}`);
  }
  
  // doOperation();


  // Using callback - 
/**
 * 
Because we have to call callbacks inside callbacks, 
we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).
 */

  function doStep1(init, callback){
    const result = init + 1;
    callback(result);
  }

  function doStep2(init, callback){
    const result = init + 2;
    callback(result);
  }

  function doStep3(init, callback){
    const result = init + 3;
    callback(result);
  }

  function doOperation(){
    doStep1(0, (result1)=>{
        doStep2(result1,(result2)=>{
            doStep3(result2, (result3)=>{

            })
        })
    });
  }

  //doOperation();

  //

  function job(data) {

    return new Promise((resolve, reject)=>{
        try{
        if(isNaN(data)){
            reject("error");  
        }
    }
    catch(e) {
        throw e.message;
        //  Block of code to handle errors
      }

        // setTimeout(()=>{
        //     resolve("hello world")
        // }, 2000);
    });
    // new Promise((resolve, reject)=>{
    //     if(isNaN(data)){
    //       return reject("error");  
    //     }else{
    //         if(data % 2 != 0){
    //             // setTimeout(()=>{
    //             //     resolve("odd");
    //             // }, 1000)
    //            return resolve("number odd");

    //         } else if(data %2 === 0){
    //             // setTimeout(()=>{
    //             //     resolve("even");
    //             // })
    //             return resolve("number even");

    //         }  
    //     }
        
    // });
}
console.log(job("*"));
  