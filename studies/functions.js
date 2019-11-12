/**
 * Functions
 * 
 * Functions are one of the most fundamental building blocks in Javascript.
 * We use them to allow us perform a task, using statements.
 * Functions are made up of code blocks that we can input and use to execute the task.
 * With functions we can create closures that allows us to reference variables inside nested function.
 * 
 * There are two phases to using a function.
 * The first phase is like a declaration/creation phase
 * Where we give the function a name and parameters.
 * The second phase is the invoking/execution phase, where created function
 * are performing the given task.
 */
 
 function timeTwo(num){ // here we are declaring timeTwo takes a num parameter
  let x2 = num * 2; // Here we are executing that we are multiplying num by 2
  return x2; // return the newly multiplied number.
 }
 timeTwo(3); // => 6.

/** 
 * Parameters & Passed Arguments
 * 
 * Parameters are like a variable name in where we would use it in place for a value
 * that would be pushed into the function.
 * Its used to give the user what kind of datatype we want to be pushed.
 * 
 * Passed Arguments are the actual real values that we want to in the parameter.
 * The function can not run until an argument is passed.
 */
 
 function myfunction(parameter){
  return parameter; 
 }
 console.log(myfunction('Argument'));
 
 /**
  * Named Function syntax
  * 
  * We can declare a keyword for named function.
  * afterwards in parenthesis we can set a parameter to the function.
  * Next using a curly bracket we can get working on the code body.
  * The code body is important for the function to allow it perform a certain task.
  * lastly we can return the output that we want from the function.
  *
  * 
  * Assigning a variable to a function.
  * 
  * We can assign a function into a variable container, 
  * which helps calling the function later within a function
  */
  
  let assignVar = function(parameter){ // assigning a function to a variable
   return 'assigned variable';
  };
  assignVar(); // Here we are calling the function under the assignVar, variable.
  
  /**
   * Functions are input/output optional
   * 
   * Functions can optionally take a paramater and optionally return an output.
   * But without a return statement the function will output undefined
   */
   
   function print(){ // Here we have a function that does not a parameter
    console.log("optional"); // this function does not have a return
   }
   print();
   
   /**
    * Scopes
    * 
    * Scopes are sections of a function. There are two types of scopes
    * Global scopes and Local scopes. 
    * Global scopes are typically outside the function, but does NOT have access to local scopes.
    * While Local scopes are inside within a function and has access to the global scopes.
    */
    
    let sun = 'sun'; // globally scoped variable
    function home(){ // This is a function
     let me = 'nah '; //locally scoped variable
     return me + sun;
    }
    home(); // should be able to return 'nah sun'
    // if we console log the variable (me) outside of the function. we'll get a reference error
    
    /**
     * Closures
     * 
     * Closures are created everytime we create a function. 
     * We can use closures by calling a function within a function.
     * Closures gives us access to the outter function scope while we're in the
     * inner function.
     */
     let first = "Bhat";
     let last = "Mon";
     
     function name(first, last){
      let fullName = first + " " + last;
      return function greet(){
       return "Hi " + fullName;
      };
     }
     name(first, last);// here should return "Hi Bhat Mon"
     
     //Since we've created a greet function within the name function, 
     //the greet function has access to all of variables outside of its scope.