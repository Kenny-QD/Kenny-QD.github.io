/**
 * 
 *  Operators:
 * 
 * Operators are used so, we can use to perform an act on our data
 * We can use them to assign, compare, and equate a value, depending on our operator.
 * there are different types of operators we can use such as:
 * 
  
  /**
   * Assignment Operators
   * 
   * Assignment operators assigns value to variables.
   * These include:
   *
   *   =  Assignment: This is used assign a value to a variable.
   * 
   *  +=  Addition assignment: This can be used to add.
   * 
   *  -=  Subtraction assignment: This can be use to subtract.
   * 
   *  *=  Multiplication assignment: This can be used to multiple a value.
   * 
   *  /=  Division assignment: Used for dividing a value
   * 
   *  %=  Modulus assignment: Also known as the Remainder, which returns the remainder 
   *      whenever it is divided by another operand
   */
 //   [EXAMPLE]
 
x = y;  // This is equivalant to x = y
x += y; // This is equivalant to x = x + y 
x -= y; // This is equivalant to x = x - y
x *= y; // This is equivalant to x = x * y
x /= y; // This is equivalant to x = x / y
x %= y; // This is equivalant to x = x % y
 
 /**
  *  Arithmetic Operators:
  * 
  * Arithmetic Operators take numerical values
  * to handle day to day number values.
  * These operators includes:
  *  (+)   Adds                                              
  *  (-)   Subtracts                                         
  *  (*)   Multiples                                         
  *  (/)   Divides                                           
  *  (%)   Modulus operator that returns the remainder        
  *  (++)  Increment operator that increases the value by 1  
  *  (--)  Decrement operator that decreases the value by 1  
  */
 
  let x = 3; // we have initialize x to the value of 3
  let y = 6;
  // using the variables we'll use use arithmetic operators.
  
  x + y; // we should get the result of 9
  y - x; // should result to 3
  x * y; // should result to 18
  y / x; // should result to 2
  y % x; // should result to 0
  y++;   // Will add 1 to y which results to 7
  x--;   // Will subtract x by 1 resulting to 2
  
  
  /**
   * Comparison Operators
   * 
   * Comparison operators: are used to compare one value to another.
   * Which are commonly used in conditional statements
   * The Comparison Operators includes:
   * 
   *  (==)   Abstract comparison: which is non-strict, and converts the value into the same type before comparing
   * 
   *  (===)  Strict comparison: Is strict and will only become true if it strictly matches the same value and type
   * 
   *  (!=)   Inequality operator: Makes sure that it does NOT match with the value, but is also strict
   * 
   *  (>)    Greater than:                  (<)    Less than sign: 
   *  (>=)   Greater than or equal:         (<=)   Less than or equal: 
   * 
   *  If the comparison is determined YES then it'll return with TRUE. 
   *  If the comparison is determined NO then it'll return with FALSE.
   * 
   *  [EXAMPLES]
   */
   let num = 3;
   let myNum = 5;
   let myOtherNum = "5"; 
   // we'll use the operators above to test out our comparison operators.
   
   myNum === myOtherNum; // This will become FALSE, Eventhough they're the same number, but they are a different datatype.
   myNum == myOtherNum;  // BUT This will become TRUE, Because it converts the type into the same type as the first operand
   num !== 3;   // This becomes FALSE, because the values are equal, and it wants it to NOT EQUAL
   myNum >= 10; // myNum is not greater than 10, therefore it becomes FALSE.
   num <= 5;    // num is less than 5, therefore it is TRUE
  /**
   * Logical Operators
   * 
   * Logical operators is used to combines two or MORE conditions
   *    [Operators]              
   * 
   * (&&)  // AND operator // essentially extends a conditional like:
   *   if( a === true && b === true){   gives a condition if both a AND b are true proceed
   * 
   * (||)  // OR operator // essentially gives another condition wihin a condition
   *   if( a === true || b === true){   allow either a OR b to be true to proceed.
   * 
   * (!)   // NOT operator   // essentially looks for the inverse and is NOT within the conditional
   *   if(!array.length){  // explains if there is NO array length then proceed.
   */
   // [EXAMPLE]
   
   (num < 10 || num > 2); // should be true because num is equal to 3 and is less than 10, but greater than 2
   (num > 1 && myNum !== 5); // will return false, eventhough num is greater than 1, but myNum Variable is equal to 5
   (myNum !== 4); // will return true, because myNum variable is equal 5, but not 4
   // the Bang operator is checking wheither the myNum variable is equal to 4, since it is not it will return true
  /**
   * Unary Operators
   * 
   * Unary operator is an operation with ONLY one operand
   *    / Operators / 
   * 
   * 1. !       // Logical NOT, Convert into a boolean value, and negates it
   * 
   * 2. typeOf  // Will return a string, depecting the datatype of the value
   * 
   * 3. -       // Unary Negation converts the number value into a negative, 
   *               unless the number value is already negative 
   *     [EXAMPLES]
   */
 
   typeof "name";           // returns 'string'
   typeof undefinedVar;     // returns 'undefined'
   typeof 10;               // returns 'number'
   typeof true;             // returns 'boolean'
   typeof null;             // returns 'object'
   
   !true;           // returns false
   !false;          // returns true
   !0;              // returns true
   !null;           // returns true
   
    
   -10;             // returns -10
   -true;           // returns -1
   -null;           // returns -0
   -'Infinity';     // returns -Infinity
   
  /**
   * Ternary Operator
   * 
   * Ternary operators is the only javascript operator, that takes 3 operands.
   * It can be use to cut down syntax for if /else if/ else
   * 
   * instead having to write a whole else if statement, we can use ternary operators
   * condition ? true : false;
   */
var score = 88;
var test = (score > 75) ? 'pass' : 'fail'; // ternary 
console.log(test); // will print out 'pass'

// Compared to:

if(score >= 75) { // if/else
 return "pass";
} else {
 return "fail";
}




