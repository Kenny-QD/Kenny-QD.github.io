/** 
 * Datatypes
 * 
 * Datatypes are variables in Javascript to contain any type of data. The Variable can be 
 * a string, number, boolean, an Array, object, function, undefined, null, NaN, infinity, or -infinity
 * 
 * Strings
 * 
 * Strings are used to store texts. In order to store a string the text must have either a double quotation mark
 * or single. Strings are also immutable which means they can not be changed.
 */
 var string1 = "This is a string";
 var string2 = 'This is also a string';
 
 /**
  * Number
  * 
  * Numbers can be written with or without decimals.
  */
  var x = 10;
  var y = 1.0;
  
  /**
   * Boolean
   * 
   * Booleans shows wheither a value is true or false using comparisons and conditions
   */
   
   ( x > y ); // should return as true
   ( x < y ); // Should return as false
   ( x == y );// Should return as false
   
   // You can also use the boolean() function to find out if an expression or variable is true or not
   
   Boolean(x > y); 
   
   /**
    * Array
    * 
    * Arrays are used to store multiple values in a single variable. (Like a string or a number)
    */
    
    var myArray= ["Blue", "Yellow", 42];
    
    //The order within the array starts at the 0 index
    
    var colors = myArray[0]; // which will choose "Blue" from the Array and the value of colors will be "Blue"
    
    /**
     * There are different ways to manipulate such as; Pushing and Popping, Shifting and Unshifting.
     * Pushing method and put in a value at the end of an Array, While Popping will take a value out of an Array.
     * Shifting an Array will remove a value from the beginning of an array and unshifting will add a value from the front.
     */
     
// Example
myArray.pop(); // Which will remove the 42
myArray.push("Red"); // Now I will add "Red" at the end of the array
myArray.unshift("White"); // Will add the value of "White" in front of the Array
myArray.shift(); // Will then remove the "White" from the array

/**
 * Null
 * 
 * Null is a special value that represents basically "nothing" or "empty" it essentially has no value
 */
 var mySoul = null; 
 console.log(mySoul); // The console should print null.
 
 /**
  * undefined
  * 
  * Undefined just means that a value has been not assigned. 
  * It is not the same as Null
  */
  
  var score; // This is an undefined value.
  
  /**
   * NaN
   * 
   * NaN represents "Not A Number" which indicates that a value is not an actual number.
   */
   isNaN(88); // will show to be false because 88 is an actual number
   isNaN('String'); // will show up as true because 'String' is not a number
   
   /**
    * Object
    * 
    * Objects is JavaScript's most used datatype. An object is a list of primitive datatypes
    * that is stored into an literal array {};
    */
    
    var myObject = {     // This is a simple object
        firstName: "Kenny",
        lastName: "Dang"
    };
   
   /**
    * Infinity & -Infinity
    * 
    * Infinity is a numerical value that infinite (Positively)
    * -Infinity is the same to Infinity, but (Negative)
    * 
    * They are displayed whenever a number exceeds the limits of the floating point numbers which is:
    * 1.797693134862315E+308. or -1.797693134862315E+308.
    *       (for Infinity)             (for -Infinity)
    * 
    */
    
    /**
     * Primitive/Simple and Complex datatype.
     * 
     * Javascript has only one Complex datatype which is the Object datatype that is Mutable (Can be changed)
     * Primitive/Simple Datatypes are Immutable that cannot be changed.
     * Primitive/Simple Datatypes are:
     * 1. Strings
     * 2. Numbers
     * 3. Booleans
     * 4. Undefined
     * 5. Null
     *
     * Complex Datatypes
     * 
     * 1. Objects
     * 2. Functions
     * 3. Arrays
     * 
     * The Difference between reference datatype and primitive datatype is that 
     * reference datatype's value is stored as a reference and is not stored directly on a variable
     */
     // Example
     
     // Lets use a Primitive Datatype to store a value
     var person = "Michael";
     var anotherPerson = person; // another person has the value of person
     person = "Jackson"; // value of person has changed
     
     console.log(anotherPerson); // should log Michael
     console.log(person); // Should log Jackson
     // This is by value
     
     // Copy by Reference
     
     var aPerson = {name: "Mike"};
     var aAnotherPerson = aPerson; // assigning aAnotherPerson to aPerson
     aPerson.name = "Tyson"; // changing the value of aPerson to Tyson
     
     console.log(aAnotherPerson.name); // Should print out Tyson
     console.log(person.name); // Should print out also Tyson
    

