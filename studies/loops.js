/**
 * Loops
 * 
 * Loops are used to let us run a code block as many times as possible.
 * We use them to iterate over a collection of data.
 * Loops iterate infinitly, unless given a stopping condition, which stops the loop
 * once given condition has been reached.
 * 
 * There are 3 different types of loops we can use
 * 
 * While-Loops, For-loops, For-in-Loops.
 */
 
 
 /**
  * For-Loops:
  * Can be used to when we loop a certain amount of times
  * We can use them to iterate through a collection of data like
  * Arrays, Strings, etc.
  * 
  *    *Initial expression,
  *      *Stopping condition
  *        *Incrementor
  * 
  *  With an initial expression, we are starting the loops
  * 
  *  The stopping condition is when we want the loop to stop,
  *   failure to give a proper stopping condition will create an infinite loop.
  *    infinite loops can crash your system, if not given a proper condition
  *  
  *  Incrementors increases or decreases once the condition is satisfied and will
  *   continue the action until the stopping condition is met.
  *           
  *            [EXAMPLE]
  */
  
  // [Initial]       [Incrementor]
 //      |                |
//       V                V
  for(let i = 0; i < 10; i++){
  //               ∧
 //                |
//        [Stopping Condiition]

   console.log(i); // will print the numbers 1 - 10
  }

/**
 * Looping over Arrays!
 * We can loop over arrays, by using a For-Loop
 * by doing so we can access within an array 
 *             [EXAMPLE]
 */
 let array = [1,2,3,4,5]; // Our array we are going to iterate through
 for(let i = 0; i < array.length; i++){
  console.log(array[i]); // should print out 1, 2, 3, 4, 5!
 }
 // BUT THATS NOT ALL!
 // We can also iterate BACKWARDS!!
 
 for(let i = array.length-1; i >= 0; i--){
  console.log(array[i]); // This should print out 5, 4, 3, 2, 1!
  // Here we are iterating the array backwards
 }
  

/**
 * For-in-Loops:
 * We use For-In-Loops to access the values within an object.
 * This lets us access the values that are stored within a key.
 *             [EXAMPLE]
 */
 let object = {};
 for(var keys in object){
  console.log[keys];
 }
 
 /** 
 * Looping-Over an Object:
 * For-in-Loops, iterates through an object for us, by doing so
 * we can access the keys within an object.
 * 
 *             [EXAMPLE]
 */
 let myName = {
  nameFirst: "Tom",
  nameLast: "Cruise",
 };
 for ( var key in myName){ // We are accessing the Object of myName
     console.log(key); // This should print the keys of nameFirst and nameLast.
      console.log(myName[key]); // BUT we can go deeper within the object!
                                 // This should print out Tom, Cruise
 }
 
/**
 * While-Loops:
 * We can use while loops when we want to loop WHILE the given condition is true
 *             [EXAMPLE]
 */
 let counter = 0;
 while (counter <= 10){
  counter++;
  console.log(counter); // Should print out 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!
 }