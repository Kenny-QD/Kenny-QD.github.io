/**
 * String-Manipulations
 * 
 * Strings is consist of characters that can be letter, number, or symbols.
 * But they are simple immutable datatype that we can manipulate using operators 
 * and string-manipulation methods
 * 
 * One way we can manipulate strings is using operators
 */
 // [OPERATORS] //
 // We can manipulate strings using operators such as (=), and (+)
 
 let candy = "Chocolate "; // we've initialize chocolate to candy soon to be concated
 let cool = 'Ice ';
 let dessert = candy + cool + "Cream"; // the final product of our concat using ( + )
 let desserted = dessert += "?"; // using (+=) addition assignment operator we can add a question mark
 console.log(desserted); // should print out "Chocolate Ice Cream?" as a string
 

 // There are ways of manipulating strings using methods
 
 // split()       : converts a string into an Array
 var banana = 'banana split' ;
 banana.split(' ');
 console.log(banana); // Now it should print ['banana', 'split'] as an array
 
 // slice()       : removes part of a string and makes it into a new string
 var cut = "Pizza Slice";
 var me = cut.slice(0 , 5);
 console.log(me); // This should allow print out a whole Pizza!, instead of a little slice :|
 
 // repeat()      : returns a new string with a number of copies of existing strings
 var repeater = "BANG ";
 repeater.repeat(3); // This will make the string repeat itself 3 times into "BANG BANG BANG"

 // toLowerCase() : converts string to lower case
 var yey = "YAY"
 var shh = yey.toLowerCase(); // This will make the string into lowercase
 console.log(shh); // should print out a sad "yay"
 
 // toUpperCase() : converts string to uppercase
 var a1 = "bingo";
 var winner = a1.toUpperCase();
 console.log(winner); // should print out "BINGO" was his name oh...
 
 // concat()      : Joins two or more strings and makes a new string
 var dare = "tumble ";
 var drugs = "weed";
 var what = dare.concat(drugs); // This should print out "tumble weed"
 console.log(what);
 
 // substring()   : removes two parts of a string
 var guy = "Post Malone!";
 var oh = guy.substring(6, 11);
 console.log(oh); // will print out "alone"...
 
 //trim()        : removes the white space from both ends of a string
 var empty = "     space     ";
 empty.trim(); // removes the empty spaces before and after the word
 console.log(empty); // print "space"
 
 //charAt()     : returns the character at the specified index
 var woo ="Opium" ;
 woo.charAt(2); // should print out "i"
 
 //toString()    : converts the value into a string object
 var num = 88;
 num.toString(); // will convert the number 88 into a string of "88"
