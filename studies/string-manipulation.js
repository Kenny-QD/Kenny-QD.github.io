/**
 * String-Manipulations
 * 
 * Strings can be altered using different methods
 * 
 * One way we can manipulate strings is using operators
 */
 
 var temperature = "Hot"; // Now that we've initialized our Variables we can use it together to form a new string
 var animal = "Dog";
 
 var food = temperature + " " + animal; // it is important to either have your variable with a space
                                        // or Adding an additional " " inbetween the strings or else it'll look like "HotDog"
 console.log(food); // Should print "Hot Dog" forming a new string
 temperature += animal; // This can also combine the two strings

/**
 *  There are string methods that can be used to manipulate strings
 * 1. split()       : Splits a string into an Array substrings
 * 2. slice()       : Extracts part of a string and returns it into a new string
 * 3. concat()      : Joins two or more strings and makes a new string
 * 4. repeat()      : returns a new string with a number of copies of existing strings
 * 5. toLowerCase() : converts string to lower case
 * 6. toUpperCase() : converts string to uppercase
 * 7. substring()   : extracts the characters frin a string between two indices
 * 8. trim()        : removes the white space from both ends of a string
 * 9. toString()    : returns the value of a string object
 * 10. charAt()     : returns the character at the specified index
 */
 // Example of Split
 var spl = "I stubbed my big toe";
 spl.split(" ");
 console.log(spl); // Now it should print that spl is an array
 
 //Example of Slice
 var sli = " Thank you";
 var ce = sli.slice(0 , 6);
 console.log(ce); // This should allow print out Thank
 
 // Concat()
 var con = "New ";
 var cat = "age";
 var conkitty = con.concat(cat); // This should print out "New age"
 
 // Repeat()
 var repate = "Bananas! ";
 repate.repeat(3); // This will make the string repeat itself 3 times
 
 // toLowerCase()
 var low = "HOT DIGGITY";
 var cas = low.toLowerCase(); // This will make the string into lowercase
 
 //toUpperCase
 var up = "jojo!";
 var per = up.toUpperCase(); // using this method per will be initialized as "JOJO!"
 
 // substring()
 var sub = "macaroons";
 var strang = sub.substring(2, 5);
 console.log(strang); // will print out car
 
 // trim()
 var tri = "     air     ";
 tri.trim(); // removes the empty spaces before and after the word
 
 // toString()
 var tos = "World Wide";
 tos.toString(); 
 
 // charAt()
 var char = "UNIVERSE";
 char.charAt(2); // I