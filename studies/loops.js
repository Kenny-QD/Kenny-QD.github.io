/**
 * Loops
 * 
 * Loops are used to repeatedly run a block of code, until a certain condition is met
 * There are different ways to loop, which are while, do while, for, and for-in.
 * 
 * While Loops 
 */
 
 var sum = 0;
 var num = 1;
 while (num <= 10) { // Condition
     sum += num;     // Body
     num++;           // incrementer
 }
 // Above example:
 // num will continue to grow, since its starting from 1, it'll grow after the first iteration to 2, then so forth 3
 // until it hits 10 thats when the incrementer will stop and the loop is finished.
 
 // Incrementing causes the num counter to increase pre loop, once the counter becomes greater than 10
 // the loop will stop.
 // The incrementer helps the runs infinitely unless a stopping condition is given, This makes the loop to stop
 // once the condition is met 
 
 // Do-While loops
 
var text = "";
var i = 0;
do {
  text += "\nCounter is " + i;
  i++; // incrementing i
}
while (i < 10); // stopping conditions
 console.log(text);
 
 /* Do-while loops executes first then the condition is evaluated if the while condition is true
 the block is excuted again, until the condition is false.
 */
 // For loop
 
 for (var i = 1; i <= 10; i++) { // This for loop will count forwards 
     sum = sum + i;
 }
 for (var k = 20; k >= 0; k--) { // This for loop will count backwards
    k == i;
 }
 /* For loops is one of the most used loops. It consist of 3 parts, separted by semicolons
 1st part is the initializer, which initializes the loop
 2nd part is the condition, whenever the condition is true it'll continue to run until the condition is no longer met.
 3rd part is the updater, It can either increment (++) or decrement (--) the loop 
 *==WARNING==* If the condition is not met it will continue on Infinitly and can cause a crash.
 */
 
 /**
  * For-In Loop
  * 
  * a for-in loops iterates through the properties of an object and excutes the loop.
  */
  
  var person = {
      firstName: "Suzie",
      lastName: "Doe",
      age: 22
  };
 var text = "";
 var x;
 for (x in person) {
     text += person[x] + "-"; // this should print out Suzie-Doe-22-
 }
 
 // Looping through an Array
 
 var myArr = ["Its", "my", "Array"];
 var arL = myArr.length;
 for ( var i = 0; i < myArr.length; i++){ // going forward within an Array
     console.log(myArr[i]);
 }
 
 for (var j = arL; j >= 0;j--){ // This should loop through the array backwords
     console.log(myArr[j]);
 }
 