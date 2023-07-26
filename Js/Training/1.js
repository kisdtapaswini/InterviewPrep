/**
 * 1.How we can make async call using set time out - Basic example
 * Example 1
 */
console.log("111");
console.log("222");
setTimeout(()=>{
    console.log("Async JS log"); // it doesn't holds the execution here
}, 3000)
console.log("333");
console.log("444");
//------------------------------------
/**
 * 2. HTTp call as a async task
 * Example 2
 */

const request =  new XMLHttpRequest();
request.addEventListener('readystatechange', ()=>{  
   // console.log(request, request.readyState);
   if(request.readyState === 4){ 
    /**
     * even if there is some error(404 0r any) the the request can have reaydState 4
     * and the {} empty object in the responseText
     * but the request.status return the actual status code- 200 or 400 or 500 error codes
     * So for the success case we can modify the if like below
     *    if(request.readyState === 4 && request.status === 200){ 

    */
        console.log(request.responseText); // it prints the whole response
   }
})
request.open("Get", "https://jsonplaceholder.typicode.com/todos");
request.send();

//------------------------------------ -------------- ---------------

/**
 * Callback functions
 */

const getTodos = (callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{  
        if(request.readyState === 4 && request.status === 200){
          //  callback(undefined, request.responseText);
          /**
 * The response text has to be a string, 
 * because when browser exchanges the data with the serer
 * the data has to be a string(even if the repsonse looks like an object, it's a string)
 * to convert the data to a JSOn objct we user JSON.parse();
 * 
 * JSOn is nothing but a plain text written in JavaScript object notation,
 * inside a .json file, it automatically consider the object as a string
 * So the keys of a JSOn object alz should be enclosed with a double quates and if value sis string 
 * that also need to be enclosed with "", numbers/ booleans can be a value also.(ne need for "")
 */
          let data = JSOn.parse(request.responseText);
          callback(undefined, data);
        }else if(request.readyState === 4){
            callback('could not fetch the data', undefined);
        }
     });

     request.open("Get", "https://jsonplaceholder.typicode.com/todos");
     request.send();
}

/**
 * Lets say I want to do something once I get the response back, So I can write
 * the logic inside the if condition in the above code but what if we need to call this
 *  get Api call at many places and the response needs to be handled different ways  
 * 
 * So let's try callback and I have updated the code with a callback, which prints "callback called"
 * To distinguish between success and error repsonse let's pass two params to the callback
 */

// Each time we are able to do something different with the callback method, 

// getTodos((err, data)=>{
//   //  console.log(err, data);
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// }); 

// getTodos((err, data)=>{
//     //  console.log(err, data);
//     if(err){
//       console.log(err + "11");
//     }else{
//       console.log(data);
//     }
//   }); 

//   getTodos((err, data)=>{
//     //  console.log(err, data);
//     if(err){
//       console.log(err);
//     }else{
//       console.log(data);
//     }
//   }); 

//   getTodos((err, data)=>{
//     //  console.log(err, data);
//     if(err){
//       console.log(err);
//     }else{
//       console.log(data);
//     }
//   }); 
//------------------------------------     ------------- -  -------------------

/**
 * Synchronous(blocking) HTTP api call, which is not at all recommended
 */
const getTodos11 = ()=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{  
        if(request.readyState === 4 && request.status === 200){
            console.log("success");
        }else if(request.readyState === 4){
            console.log("fail");
        }
     });

     request.open("Get", "https://jsonplaceholder.typicode.com/todos", false); // false param here makes the HTTP call synchronous
     request.send();
}
console.log("1");
console.log("2");
getTodos11();
console.log("3");
console.log("4");
//------------------------------------     ------------- -  -------------------

/**
 * 
    Callback hell(the triangle of all callbacks)
 */
const getTodos12 = (resource, callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{  
        if(request.readyState === 4 && request.status === 200){
          let data = JSOn.parse(request.responseText);
          callback(undefined, data);
        }else if(request.readyState === 4){
            callback('could not fetch the data', undefined);
        }
     });

     request.open("Get", resource);
     request.send();
}



getTodos12('url', (err, data)=>{ // we can pass any url here by passing the url argument here
    console.log(data);
    getTodos12('url', (err, data)=>{ 
        console.log(data)
        getTodos12('url', (err, data)=>{ 
            console.log(data)
        });
    });
});


//------------------------------------     ------------- -  -------------------

/**
 * 
    Promises
    A promise is something that takes time to do, it will return after sometime
    promise can return resolved that means we get the data
    it also can return rejected meaning we get error
 */

 const getSomething  = () => {
    return new Promise((resolve, reject)=>{
        // fetch something
        resolve("result");
       // reject(reject);
    });
 }

 getSomething.then((data)=>{
    console.log(data);
 }, (err)=>{
    console.log(err);
 });

 getSomething.then(data=>{
    console.log(data);
 }).catch(err=>{
    console.log(err);
 })


 const getTodosWithPromise = (resource)=>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{  
            if(request.readyState === 4 && request.status === 200){
              let data = JSON.parse(request.responseText);
              resolve(data);
            }else if(request.readyState === 4){
                reject("Error in fetching data")
            }
         });
    
         request.open("Get", resource);
         request.send();
    });
 }

 getTodosWithPromise("url").then(data=>{
    console.log("Promise resolved", data);
 }).catch(err=>{
    console.log("Promise rejected", err);
 });

//------------------------------------     ------------- -  -------------------
/**
 * 
    Promises chain
 */
    getTodosWithPromise("url1").then(data=>{
        console.log("Promise resolved1", data);
        return getTodosWithPromise("url2");
     }).then(data=>{
        console.log("Promise resolved2", data);
        return getTodosWithPromise("url3");
     }).then(data=>{
        console.log("Promise resolved3", data);
     }).catch(err=>{
        console.log("Promise rejected", err);
     });

     //------------------------------------     ------------- -  -------------------
/**
 * fetch Api, it return promise as rejected only if there is some network error, otherwise
 * it returns resolved if there is any other issue(the response status will have the correct
 * error code)
 * So to check both the error we  can have a if condition as below
 */

fetch("url").then((response)=>{ // fetch, this returns a promise
    console.log('resolved', response);
    return response.json();    
}).then(data=>{
    console.log(data);
}).catch((err) => {
    console.log("rejected", err);
});

     //------------------------------------     ------------- -  -------------------
/**
 * async and await
 * an async method returns a promise
 * All the await methods are blocking code but the main function is an async function(getTodosAA)
 * so this doesn't block
 * it's vary cleaner code than promise chain
 */

const getTodosAA = async() => {  // this method returns a promise
    const response1 = await fetch("url1");
  //  console.log(response1);
   const data1 = await response1.json();

   const response2 = await fetch("url2");
   //  console.log(response2);
    const data2 = await response2.json();

    const response3 = await fetch("url3");
    //  console.log(response2);
     const data3 = await response3.json();
   return data1; //  this is a promise
};
// const test =  getTodosAA();
// console.log(test); // it is a promise    

console.log("1");
console.log("2");

getTodosAA()// this is non blocking
        .then(data=>console.log(data))
        .catch((err) =>console.log("rejected", err)); 

console.log("3");
console.log("4");


     //------------------------------------     ------------- -  -------------------
/**
 * Throwing errors
 */
const getTodosfetchErrorHandle = async() => {  // this method returns a promise
    const response1 = await fetch("url1");
    if(response1.status != 200){
        throw new Error("cannot fetch data"); // The async method will return rejected if status is nt 200
    }

   return data1; //  this is a promise
};

getTodosfetchErrorHandle()
        .then(data=>console.log(data))
        .catch((err) =>console.log("rejected", err.message)); 