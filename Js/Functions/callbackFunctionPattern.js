// 1.Exa of callback (a existing method or an anonymous function (which we create as we call main funtion)can be a callback method)

function writeCode(callback){
    callback();
    console.log('Writing bugs');
}
function introduceBugs() {
    console.log('Making bugs');
}
function writeCode(introduceBugs);  /*introduceBugs is passed here without paranthesis because 
paranthesis executes a function whereas in this case we want only to pass a reference to writeCode() and 
writeCode() executes it.*/

// refer callback example from the design pattern book

// 2. callback and scope
    /* In case callback function is not a one-off anonymous function or global function but 
    it's a method of an obejct as below*/
    // Exa:
     
    var myapp = {
        color: "green",
        paint: function(node){
            node.style.color = this.color
        }
    }; 
    var findNodes = function (callback) {
        // ...
        if(typeof callback === "function"){
            callback(found);
        }
        //....

    }
    findNodes(myapp.paint); /* it wont work as expected because this.color will nt be defined.
    here this refers to global object instead of myapp as findNodes is a global function
    So the solution to this problem is to pas the object to which the call back belongs a sbelow
     findNodes(myapp.paint, myapp); 
     So findNodes() needs to be modified to bind that object we pass as below*/
     var findNodes = function (callback, callback_obj) {
        // ...
        if(typeof callback === "function"){
            callback.call(callback_obj, found); // we can have call or apply depending on the params
        }
        //....
    } 
    findNodes(myapp.paint, myapp);

    // can alo be written as ------------starts
    var findNodes = function (callback, callback_obj) {
        // ...
        if(typeof callback === "string"){
            callback = callback_obj[callback_obj];
        }
        if(typeof callback === "function"){
            callback.call(callback_obj, found); // we can have call or apply depending on the params
        }
        //....
    } 
    findNodes('paint', myapp); 
    // can alo be written as ------------ends
