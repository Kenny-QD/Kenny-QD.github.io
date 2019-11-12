/** 
 * Datatypes
 * 
 * Datatypes: are types of value that consist of simple datatypes and complex datatypes.
 * 
 * Simple datatypes are primitive datatypes that consist of numbers, strings, booleans, Nan, null, and undefined.
 * primitive datatypes are immutables which means they can be reassigned, BUT can not be modified in some way.
 * They are considered simple, because they don't hold any other value besides its self.
 * simple datatypes are copied by value meaning their value are copied from one variable to the next.
 * 
 * Complex datatypes consist of: arrays, objects, and functions. They are considered complex because they are
 * indefinite in size and can take however amount we put in it.
 * That means they are mutatable and copied by reference.
 * Complex datatypes can be modified and altered in some ways using different methods
 */ 
 
 var name = "Joe"
 var firstName = name; // This is referencing by copy
 name = 'Dirt';
 console.log(firstName); // although we've changed the name variable to "Dirt"
 // firstName variable will still be "Joe".
 // referencing by copy, simply just makes a copy of the variable its referencing
 
 
 let array = [] // creating an array
 array.push('altered array'); // we are altering it by pushing a new value within
 console.log(array); // should print out ['altered array']
 
 var newArray = array; // This is copied by reference, because it is refering to the array variable
 newArray.unshift("Same"); // this affects its referenced array
 console.log(array); // this should print out ["Same", "altered array"]
 
 // [Simple Datatypes] //
 
 
 /**
  * Number
  * 
  * Numbers are simple datatype that represent any number that can be megative, positive or a decimal.
  */
  var number = 88;
  var negative = -10;   // These are all numbers
  var decimal = 0.01;
 
 /**
 * 
 * Strings
 * 
 * Strings are simple datatypes that represent a string of characters.
 * strings can be a number a symbol, or a letter as long as they are within a '' or ""
 * quotation.
 */
 var string = "This is @ str1ng!"; // as long as theres a quotation surrounding 
 
  /**
   * Boolean
   * 
   * Booleans are simple datatypes that has two possible values either true or false
   */
   let x = 1;
   let y = 3;
   
   (x > y); // returns false
   (x < y); // returns true
   Boolean(x > y); // returns false


/**
 * Null
 * 
 * Null is a simple datatype that is similar to undefined,
 * but just means it has no value intentionally
 */
 var feelings = null; 
 console.log(feelings); // The console should print null.
 
 /**
 * undefined
 * 
 * Undefined is a simple datatype that means a variable has yet to be assigned. 
 * 
 */
 var unDefine; // This is an undefined value.
 
 
 /**
 * NaN
 * 
 * NaN is a simple datatype that means 'Not a Number' It simply just shows if its a number or not
 */
 
 isNaN(88); // since 88 is a number this will return as false
 isNaN('88'); // since the number 88 is in a string this will return to be true instead because its a string and not a number

/**
 * 
 * Infinity & -Infinity
 * 
 * Infinity & -Infinity are simple datatypes
 * that are greater than any number, its the maximum number that we can call
 * 
 * the number that represent infinity is:
 * 1.797693134862315E+308. 
 * 
 * While -Infinity is:
 * -1.797693134862315E+308.
 * typically the same number, but inverse
 */
 
// [Complex Datatypes] //


/**
 * Arrays
 * 
 * Arrays are complex datatypes that can store many different other datatypes
 * that are contained within a square bracket [ ].
 * Array can be referred as a collection since they can have different types of data.
 * These collections are indexed numerically start with 0 and so forth from there
 */
 
 let arrays = ['string', 88, false, {} ]; // array can any other data inside
 
 /**
  * Objects
  * 
  * Bbjects are complex datatypes that can also store multiple datatypes and is also a collection.
  * Objects rely on their key / value pairs which means that values are stored within a key
  */
  
  let kid = {}; // declaring kid an object literal 
  kid.nameFirst = 'Scrappy'; // we're using dot notation to give the object a key and a value of 'Scrappy'
  kid['nameLast'] = 'Coco'; // using bracket notation to do the same above
  console.log(kid);