// 1. Apply() and call()
    /* In purely functional programming like javascript a function is not
     described as being called or invoked but rather it's applied.
     we can apply a function using the method Function.prototype.apply() as function in JS are actually 
     objects they have methods.*/
     // Exa :
     // define a function
     var sayHi = function(who){
       return "Hello"+(who? ", "+ who : "")+"!";
     };
     // invoke a function
     sayHi(); // 
     console.log(sayHi("mili"));

     //apply a function
     console.log(sayHi.apply(null, ["hello"]));// if the first param is null, then this points to the global object,
     //which is exactly wht happens when you call a function that is not a method of a specific object.

      // Exa 2 
       var alien = {
        sayHi: function (who){
            return "Hello"+(who? ", "+ who : "")+"!";
        }
       }
       alien.sayHi('world');
       sayHi.apply(alien, ["humans"]); // in this case this inside sayHi() points to alien, 
       /* like apply(), there's also a call() method of the Function.prototype object but it's just a
       syntax sugar on top of apply(). When we have a function that takes only one param we can use call()

       */
      //Exa
      sayHi.apply(alien, ["humans"]);
      sayHi.call(alien, "humans");

//-----------------------------------------------------
// 2. Partial Application
 /** As we know calling a function is actually applying a set of arguments to a function, it is possible to
  * just pass a few arguments, not all of them. 
  */
 //Exa--:
 function add(x,y) {
  return x+y;
 }
 add(5,4);

 //Trying to passparam partially in two steps---
 //Step 1 :
 function add(5, y){ // substitute one arg
  return 5 + y; 
 }
// Step 2 :
function add(5,4){
  return 5+4;
 }
 /**Here 2 and 3 are not valid javascript code, we can make this scenario working by Js curring pls */

 //3. Currying or schonfinkelisation (this name came from the name of the mathematician Haskell Curry)
 /**
  * Currying is a transfom=rmation process to transform a function.
  */
 // Exa : a curried add()
 function add(x,y) {
  var oldx = x, oldy = y;
  if(typeof oldy === "undefined"){
    return function (newy){ // partial
      return oldx + newy;
    }
  }
  //full application
  return x+y;
 }
 typeof add(5); // logs function.
 // add() creates a clouser around the inner function it returns, the clouser stores the original values
// x and y into private varibales oldx and oldy. The first one, oldx is used when inner function executes
//If there is no partial application that means both x and y are passed, the function proceeds as usual.
 add(3)(4); //output: 7

 var add200 = add(200);
 add200(10); // 2010

 // the actul version of above example as we dont need oldx and oldy actly as x is stored in the clouser implicitly.
 function add(x,y) {
  if(typeof y === "undefined"){
    return function (y){ // partial
      return x + y;
    }
  }
  //full application
  return x+y;
 }
// Whn we are calling the same function and passing mostly the same parameters then the function is probably a good candidate for currying
 // try the example in the book