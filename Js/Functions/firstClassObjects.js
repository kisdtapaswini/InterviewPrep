/* 1.Functions in Javascript are very special
         i. They are first-class-objects and they provide scope
   2.Functions are objects that:
         i. Can be created dynamically at run time, during the execution of the program.
        ii. Can be assigned to variable, can have their reference copied to other variables. 
       iii. Can be passed as arguments to other functions and can also be returned by other functions
       iv. Can have their own properties and methods
    3. Function are objects and they provide scope*/
    
//-------------2.i.------(it's not a good idea to create function using Function constructor)
// The Function() constructor expects any number of string arguments.
// The last argument is the body of the function – it can contain arbitrary JavaScript statements,
// separated from each other by semicolons.


var func = new Function("x", "y", "console.log('111');return x*y;");  // anonymous functions
function secondFunction() {
   var result;
   result = func(10,20);
   console.log(result);
}
//secondFunction();

//-------------2.ii.------

var dis = function (){
    console.log("Assigned to another variable");
}
var show = dis;
//show();

//-------------2.iii.------
function getName(name1){
    return name1;
}
function dispaly(name2){
 console.log(name2);
}
//dispaly(getName("Mili"));

function outer (){
    var name = "Mili";
    console.log("I am an exa of clouser -- outer" + name);

    return function inner(){
        console.log("I am an exa of clouser -- inner" + name);
    }
}
//var out = outer();
//out();
// can also be written as outer()(); 
//-------------2.iv.------
 function FunConstructor(){
    name: 'Mili';
    age: 33;
    show: function (){
   console.log(this.name, this.age);
    }
 }
 var a1= new FunConstructor();
 a1.show();