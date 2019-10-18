/**
 * 
 *  Javascript Operators
 * 
 *  Operators performs operations on single or muliple operands that produces results
 *  There are different categories of operators that perform different tasks.
 *  1. Arithmetic Operators
 *  2. Assignment Operators
 *  3. Comparison Operators
 *  4. Logical Operators
 */
 
 /**
  *  Arithmetic Operators
  * 
  * Arithmetic Operators are used for mathematical operations
  *     / Operators /                                              / Examples /
  * 
  * 1. +  // Adds                                               |    5 + 6 = 11
  * 2. -  // Subtracts                                          |    4 - 2 = 2
  * 3. *  // Multiples                                          |    3 * 3 = 9
  * 4. /  // Divides                                            |    8 / 4 = 2
  * 5. %  // Modulus operator that returns the remainder        |    5 % 2 = 1
  * 6. ++ // Increment operator that increases the value by 1   |    4++ = 5
  * 7. -- // Decrement operator that decreases the value by 1   |    4-- = 3
  */
  // Working- Examples
  let w = 10;
  let q = 5;
  
  w + 5; // 10
  w - q; // 5
  w * q; // 50
  w / q; // 2
  w % 8; // 2
  w++;   // 11
  w--;   // 9
  
  
  /**
   * Assignment Operators
   * 
   * Assignment operators assigns value to variables.
   *    / Operators /
   * 
   * 1.  = // Assigns value on the right to the left operand
   * 2. += // Adds left and right operand value and assigning the result to the left operand
   * 3. -= // Subtracts right operand into the left operand and assigning the result to the left operand
   * 4. *= // Multiples both left and right operand and assigning the result to the left operand
   * 5. /= // Divides left operand value by the right operand, assigning the result to the left operand
   * 6. %= // Modulus of the left operand and divide by the right and assigning the result to the left operand
   */
   
  /**
   * Comparison Operators
   * 
   * Comparison operators, ofcourse compares two operands and returns with a Boolean value
   * which is either TRUE or FALSE.
   *    / Operators /
   * 
   * 1. ==  // Compares if the operands are equal non-strict
   * 2. === // Compares if the operands are equal strictly must be same type
   * 3. !=  // Compares the inequality of operands
   * 4. >   // Greater than sign Checks if the left operand is greater than the right operand
   * 5. <   // Less than sign Checks if the left operand is less than the right operand
   * 6. >=  // Greater than or equal to Checks if the left operand is greater than OR equal to the right operand
   * 7. <=  // Less than or equal to Checks if the left operand is less than OR equal to the right operand
   * 
   *  If the comparison is determined YES then it'll return with TRUE. 
   *  If the comparison is determined NO then it'll return with FALSE.
   * 
   *  Examples
   */
   var a = 3;
   var b = 6;
   var c = "3";
   
   a == c;   // returns true     
   a === c;  // returns false    
   a != b;   // returns true     
   a > b;    // returns false    
   a < b;    // returns true     
   a >= b;   // returns true      
   a <= b;   // returns true      
   a >= c;   // returns true      
   a <= c;   // returns true  
   
  /**
   * Logical Operators
   * 
   * Logical operators is used to combines two or MORE conditions
   *    / Operators /               / Examples /
   * 
   * 1. &&  // AND operator     |  (a < 7 && b > 2) is true
   * 2. ||  // OR operator      |  (a == 4 || b == 4) is false
   * 3. !   // NOT operator     |  !(a == b) is true
   */
   
  /**
   * Unary Operators
   * 
   * Unary operator is an operation with ONLY one operand
   *    / Operators / 
   * 
   * 1. !       // Logical NOT comes before the operand and reverses the results and becomes a Boolean
   * 2. typeOf  // This is operator comes before the operand and returns the data type of operand
   * 3. -       // Unary Negation converts data types into a NEGATIVE number
   * 
   * Examples:
   */
   
   !false;  // returns true
   !true;   // returns false
   !null;   // returns true
   !0;      // returns true
   
   // SYNTAX            typeof operand; || typeof (operand);
   
   typeof 2;        // returns 'number'
   typeof true;     // returns 'boolean'
   typeof null;     // returns 'object'
   typeof yo;       // returns 'undefined'
   
   -5;              // returns -3
   -true;           // returns -1
   -null;           // returns -0
   -'Infinity';     // returns -Infinity
   
  /**
   * Ternary Operator
   * 
   * Ternary operators are takes 3 operands and is commonly used to make if statments simplier looking
   *  The operator needs a condition and TWO expressions
   *  
   * condition ? expressionIfTrue : expressionIfFalse;
   * 
   * Example:
   */
   var age = 18; // initialized age
   var drink = (age >= 21) ? "Liquor" : "Milk"; // my condition and TWO expressions
   console.log(drink); // This should print "Milk" because the age is not greater than or equal to 21
  /**
   * Ternary operators can also be chained in place of an if statement
   */
   
   // Ternary Operator
   function ternaryExample( ) {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
   }
   
   // if Statement Equivalent
   function ifExample( ){
    if (condition1) { return value1;
   } else if (condition2) { return value2;
   } else if (condition3) { return value3;
   } else { return value4;}
   }
   // Both are the same but is in different format.
   
   var condition1;
   var condition2;
   var condition3;
   var value1;
   var value2;
   var value3;
   var value4;