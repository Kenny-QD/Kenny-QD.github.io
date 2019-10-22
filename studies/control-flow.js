/**
* Control-flow
*
* Control-flow is the order of executing statements in the script with in computer.
* The script uses conditional structures called if, else if, else statements. So that
* codes can execute depending on the condition given to the statement.
* 
*
*/

/**
 * Definitions:
 * 
 * If statement: specifies a block of code to be executed, if the condition is true
 * Else if: specifies a new condition onto the code block, if the first condition is false
 * Else: specifies a code block to be executed, if the conditon is false ( Is like the default ending of the statement)
 * Switch: Uses one of many blocks to be executed.
 * 
 * Examples: 
 */
  function shirtSizes(num) {      // Here we are creating a function for shirtSizes with the base value of num
          if (num <= 10){         // The first if statement is less than 10 it will return as "Small"
          return "Small";
    } else if (num <= 15){         // Here we are creating another condition but for the ranges of 10-15, if the conditions fit the shirt it will return with Medium
          return "Medium";
    } else if (num <= 20){         // Same so forth on
          return "Large";
    } else{                        // This else statement will be our default response to ANY number higher than 20 will automatically be given XL
          return "XLarge";
    }
  }
 
/**
 * Switch Statements:
 * 
 * A switch statement tests a value and can have infinite amount of case statements.
 * case statements defines different possible values it'll keep executing until it hits a break
 * a break statements terminates the loop and transfers it to the next onto a new statement
 * 
 * When to use a switch statment?
 * Switch statments has a better readability when you want to decide using ranges of values or condition
 * Switch statments are better for branching multiple ways and is faster than an if-else
 * Its bests when using to test single intergers, or string objects.
 */
 // an EXAMPLE on general format of a Switch statement
 var num;
 switch(num) {
     case value1:
         statement1;
         break;
     case value2:
         statement2;
         break;
 }
 
 var number = 5;
 
 switch (number) {
     case 1:
         console.log("Number 1");                   // The switch statment will run through the numbers until
         break;                                     // it reaches to the specific number in the switch statment;
     case 2:                                        // Since the number variable is 5 it'll execute and print the 
         console.log("Number 2");                   // output to the console. But if there are no numbers in the case
         break;                                     // then the default console will log. saying no number is found.
     case 3:                                        
         console.log("Number 3");                   
         break;
     case 4:
         console.log("Number 4");
         break;
     case 5:
         console.log("Number 5");
         break;
     default:
         console.log("No number found");
 }

   
    
    var value1;
    var value2;
    var statement1;
    var statement2;