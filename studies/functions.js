/**
 * Functions
 * 
 * Functions is a code block that is designed to perform a task
 * Its comprised of two phases, the creation phase and the execution phase
 * The first phase is the creation phase in which a variable and a function is typed into the memory.
 * The second phase is the execution phase, to execute the lines of codes. This phase, the code can reference
 * by the variable and function that was interpreted in the memory. 
 */

 // Syntax for a function expression
 // var myFunc = function name( ){
 //     return 'My Function'; // statement
 // };
 
function myFunction() { // declaring the function, myFunction
 // code block 
}
myFunction(); // calling the function
 /* The difference between parameters and arguments PASSED
 A Parameter is a variable in a definition. When a method is called the arguments are the data that
 pass into the method's parameters.*/
 
 var argu = function(a,b){ // a,b are the parameters
    console.log(a); // should print out 1
 
 };
 argu(1,2);// when you call the argu function it creats an argument as [1, 2]
 
 /**
  * Scopes in a function
  * 
  * Functions can access variables in the parent or child scope. 
  * They cannot access variables in their inner functions.
  * Child scopes are the parameters and variable that is defined within a Parent Scope
  * The child scopes are able to use the variables of the parents scope, but parent scope 
  * CANNOT use the children scope's variable.
  * 
  */
  
   var global = 'this is globally scoped'; // accessible on a global scale
  
  function local(array){
      var arr = ['This is a locally scoped']; // accessible on a local scale
  }
 
 // Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
 
function name(){ // does not have to take an parameter or an argument for it to work
 console.log("Bang");
}
 name(); // will print out "Bang"
 // since it takes not input it'll just print out the same output everytime
 // /**
 /* Closures
  * 
* Closures are functions inside other functions who use variables from the outer
* function's scope. In the outer inner variable pairing, the inner variable can keep
* the variables declared in the outer function even after the outer function is called.
*/

  
  // Example
  var add = function() {
      var counter = 0;
      return function () {
      counter += 1; return counter }; // the counter is referencing an variable outside of its function.
  };
  
  add(); // counter should start and is at 1
  add(); // Counter goes up to 2 
  
  
  // Note to self: add arrow syntax 10/20
 
