/**
 *                      Control-Flow
 * 
 * Control-flow is an order of code that executes within a code block.
 * conditional statements such as if/else if/ else statements gives our code block a condition
 * for it to execute a certain way. Once a certain condition is met, then the function will run in 
 * the way that is intended.
 * 
 *              For Example:
 */
 
 // IF
 var day = new Date().getDay();
 var currentDay = (day) => {
 // creating an if statement will ask the computer if this "day" value will be true or false
 if (day === 0){
     // This if statement will test the value of "day" 
     
     console.log("Sunday");           // If Statements are starting statement that specifies a code block and if the condition is true. 
 }else if (day === 1 ){               // the it will execute accordingly.
     return "Monday";                 // 
 }else if (day === 2){                // Else if: is a different condition that chains in with the if statement 
     return "Tuesday";                // the first condition is not met.
 }else if (day === 3){                //
    return "Wednesday";               // Else: is the default statement if all other condition is not met
 }else if (day === 4){                // then this will execute accordingly
     return "Thursday";               //    
 }else if (day === 5){                //        
     return ("Friday");               //
 }else{                               //
     return "Saturday";
 }
 };
 currentDay(day); // This should return what day it is today;
 
 /**
  * Switch-Statements
  * 
  * We can use switch statements to test a value infinitely given by the amount of case statements we have.
  * These statements evaluates the expression and keep excuting until it hits a break statement.
  * Break statements finishes the loop and transfers it over to the next new statement.
  * 
  * Switch statements have a cleaner look and is much easier to read. 
  * we can use switch statments in lieu of If-else-if, if we are testing single intergers or string objects
  */
  
// an example we can use if changing the else if function above into a switch statement 
 
 switch (day){
     case 0:
         console.log("Sunday");     // The switch statement will go through the case
         break;                     // until it gets to the specific number in the switch statement;
     case 1:                        // since the getDay() gives a value of 0-6 we can interpret the value
         console.log("Monday");     // with the given day accordingly.
         break;                     // if there are no numbers that matches the case it will go into the 
     case 2:                        // default statement, which will be Saturday
         console.log("Tuesday");    //
         break;                     
     case 3:                        
         console.log("Wednesday");
         break;
     case 4:
         console.log("Thursday");
         break;
     case 5:
         console.log("Friday");
         break;
     default:
         console.log("Saturday");
 }
 