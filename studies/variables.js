/*
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

// 4. camalCase //
 var camalCase = 'Camals';

 // camalCase is used to distinguish different variables and make them easier to read.
 // example //
 var mydearauntsally; // 
 var myDearAuntSally; // much more easier to read having the letter capitalized

/*
 * Reserved-Keywords
 * 
 * In Javascript there are a few certain words that are reserved and can't be used as a name of a Variable
 * Such as:
 * var, let, for, in, const, while, function, alert, location, ParseFloat, eval, window, isN, aN
 */
 
 /**
  * Difference between let, var, const.
  * 
  * var: Var is a way to declare variables in Javascript. Variables that are declared by var, may or may not be used within the entire function.
  * var can be easily reassigned with a new variable if not careful. Compared to the other two, var is weaker keywords and is becoming less used
  * compared to the others.
  */ 
  // example
  //var myVar = bananas; // my var is declared as Bananas
  //var myVar = potatoes; // my var is now reassigned as potatoes, replacing the bananas.
  /**
   * let: let is a newer way of declaring variables. let was introduced with const in 2015, which is a little bit more stricter than declaring
   * var variables. Declaring let variables gave the code block more focus in existing within its corresponding block.
   * Declaring a let variable will let the variable stick to function without crossing 
   * example
   */ 
  // let myLet = ponchos; // my let variable as ponchos.
   // let myLet = hats; // This will give an error saying myLet has already been declared as ponchos and will not replace it.
   
   /**
    * const: const is almost the same as let, but much more stricter, unlike let const can not be reassigned. Once you declare a const variable
    * it'll stay that variable no matter what.
    * 
    */ 
    //example
  const favFoods = "fries";
  console.log(favFoods); // this should print out "fries"
  
 // favfoods = "tots"; // attempting to change my favFoods 
 console.log(favFoods); // This will still print out "fries"

/**
 *  HOISTING
 * 
 * In javascript, variables can be declared after it has been used.
 * BUT a variable can be be used before its declared.
 * Hoisting is a way where variables and function declaration are moved to the top of the scope. 
 * It just means whenever a function or variable is declared its moved to the top, globally or locally 
 */// example
 
 function myPet(pet){
  console.log("I have a pet " + pet); // although I have yet to declare what my pet is, as long I declare it somewhere in the block it'll input it into the console. 
 }
 myPet("Monkey");
 
 
 // But hoist does not work on initialized variables
 // example
 
 var x;
 var y = x;
 x = 9;
 
console.log(myMessage); // will print undefined but, not a referenceError
var myMessage = "hello moto"; // var declaration 
console.log(myMessage); // This will print out "hello moto" on to the console

