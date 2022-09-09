// 1.Two ways to define
//    . Function declaration and function expressions 
//   2. When we write anonymous functions expression the name property of the function object will be a blank string.
//   3. In terms of syntax, named function expression and function declarations look simillar.
//   4. semicolon is required in function expressions
//   5. THe name property is useful when using debuggers or when calling the same function recursively from itself.
//   6. Function declarations can only appear in program code, meaning inside of the body of other functions or in the global scope.
//   7. Function declarions cannot be assigned to variables or properties or appear in function invocations as parameters.
//   8. It is possible to assign a named function exp to a variable with diff name but it's not recommended



// Function Declarations

function foo(){} // Global scope
console.log(foo.name);

function local(){ // Locals cope
  function bar(){}
  return bar;
}
// ------------------------end----------------------


// Function Expression
var add = function add(a, b) {};//it's a named function expression
var add1 = function(a,b){}; // it's a anoymous function expression

const func1 = function add() {};

const object = {
  func2: function() {}
};

console.log(func1.name);
// expected output: "func1"

console.log(object.func2.name);
// expected output: "func2"
// ------------------------end----------------------

