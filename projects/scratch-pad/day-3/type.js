// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // using isArray method we're going to test if the array is an Array
    // if it true, it will say that its true, if not false
    if(Array.isArray(value)){
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // in this exercise, we want the the Object
    // test if the object is an array, if its not proceed
    // if the value we have is null, if not proceed to the next step
    // check if the value is a date, if not proceed
    // check if the type of value is an object then finish
    // if none of the tests match just return false
     if (Array.isArray(value)) {
        return false;
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // here we are looking for either an array or an object
    // test if it is an array, if not proceed to the next step
    // check if the value is null
    // check if value is a date
    // test if the value is an object, if so it is a collection
    // if all of the criteria is not in the testing its false
    if (Array.isArray(value)) {
        return true;
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // here we are looking what datatype is the value
    // test if the value is an array
    // test if the value is null
    // test if the value is a date
    // test if the value is an object
     if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return "date";
    } else if (typeof value === 'object') {
        return "object";
    } else {
        return typeof value;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
