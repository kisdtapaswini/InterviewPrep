/**
 * 1. Immediate Functions: meaning execute a function as soon as it is defined. it stopsleaking any variable in the globals cope
 * Exa:
 * (function(){
 * console.log("Watch out !");
 * }()); We can also write this as })();
 * IF code has to perform certion initializationn task when it loads such as attaching event handlers, creating objects and so on
 * All the above task needs to be performed only once So n need to create a reusable named finction
 * Exa: ---
 */
(function(){
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    today = new Date;
  //  d = days[today.getDay]
    msg = `Today is ${days[today.getDay()]}, ${today.getDate()}`
    console.log(msg);
})();

// 2.Parameters in IIFI
/**
 * Commonly The global objects passed as an argument to the IIFI so that it's accessible inside the function withou
 * having to use window as below.
 * (function (global){
 * access the global objects via global
 * }(this));
 * 
 * Notes: we should not pass two mamy params to IFFI as it's difficult to constantly scroll to the and bottom of the function.
 */
(function(who, when){
    console.log(`I meet ${who} on ${when}`);
})('Bebo', new Date());

// 3. returned values from IFFI
/**
 * IFFI can return values and these return values can be assigned to variables
 * IIFI can return any type of value including another function also.
 * We can use the scope of IFFI to privately store some data, specific to the inner function we return.
 * Exa : --
 */
var result = (function(){
    return 2+2;
})();

//we can simple write this as below aslo which is little confusing but we need to mark the brackets at the end
var result = function(){
    return 2+2;
}();

//IFFI returning a function
var getResult = (function(){
    var res = 2 + 2 ;
    return function() {
        return res;
    }
})();

// IFFI is used when we want define object properties. Let's say we need to define a object that will likely never chnage
// in the life of the object but before we define it a bit of work needs to be performed to figure out the right values.
//Exa :

var o = {
    message: (function() {
        var who = "me",
        what = "call";
        return what +" "+ who;
    })(),
    getMessage: function(){
        return this.message;
    }
};

o.getMessage();
o.message;// notes: this is a string property, nit a function but needs a function, 
           //which exacutes while the script is loading and which helps define the property.

//4. Benefits and usage
/**
 * 1. it's widely used
 * 2. it helps to wrap an amount of work we want to do without leaving any global variable nehin.
 * 3. it's also known as "self-invoking" or "self-executing".
 * 4. This pattern also enables to wrap individual features into self contained modules.
 */
