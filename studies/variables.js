/*/..
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


 /**
  * 
  * var, let, const
  * 
  * var, let, const are used to declare variables, but each are different.
  * 
  * var:
  * var is globally or locally scoped, and can be reassigned to a new variable
  * in terms of strength the var keyword the weakest way to declare a variable.
  *
  * let:
  * let however can be also reassigned, but instead of being globally or locally scope
  * let is blocked scope, meaning they are pinned to the code block they were declared in.
  * that being said, let variables are not hoisted to their code block.
  * 
  * const:
  * const variables unlike let and var, it can not be reassigned. 
  * It must be declared and assigned on the when being initialized it can not be undefined.
  * const is also block scoped.
  */
  
  var food = 'burgers';
  var food = 'fries';
  console.log(food); // will overwrite and now fries is the food variable instead of burgers
  
  function myfunc(food){
   let drink = 'oj';// This let variable will stay inside this function
   drink = 'water'; // but can be reassigned
   console.log(drink);// should print water instead
  }
  
  function sides(food){
   const meal = []; // const variables can not be changed, BUT it can be modified
   meal.push('chicken');
  }
  
  /**
   * Hoisting
   * 
   * Hoisting does exactly what it sounds like.
   * its a behavior that all variable declaration are moved to the top of their scope.
   * Note that only var variables are hoisted, let and const variables are not.
   */
   
   fruits = 'apple'; // Here we are assigning apples to fruits, but has yet to be declared
   console.log(fruits); // should print apple, once declared.
   var fruits; // although we've declared fruits after, it is automatically hoisted to the top of the scope.
   