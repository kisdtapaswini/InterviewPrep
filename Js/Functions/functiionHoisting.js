// 1. Behaviour of function declaration is not equivalent to a named function expression, but difference lies in the hoisting behavior
// Exa - 
 // antipattern, only for illustration
  function foo(){
    console.log("global foo");
  }

  function bar(){
    console.log("global bar");
  }

  function hoistMe(){
    console.log(typeof foo); // 'function'
    console.log(typeof bar); // 'function'
    foo();// logs local foo
    bar(); // TypeError: bar is not a function
    function foo(){
        console.log('local foo');
    }
    // only bar gets hoisted in case of function expression but not its definition
    var bar =   function (){ // (Function expression)
        console.log("local bar");
    }
  }
  hoistMe();
  // The presence of foo and bar anywhere in the hoistMe() function moves then to the top, 
  // overwriting the global foo and bar. The difference is that local foo()'s definition is hoisted to the top and works 
  // fine even if defined later. but definition of bar() is not hoisted.