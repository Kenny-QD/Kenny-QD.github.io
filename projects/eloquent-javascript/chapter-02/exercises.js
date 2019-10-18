
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
    // create a loop 
    // make i a hash #
    // once i length becomes less than the num stop the loop
    // increment i with hash
    for( let i = '#'; i.length <= num; i += '#'){
        console.log(i);
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
    // create a loop
    // have i be the start and loop through the end
 for (var i = start; i <= end; i++){
     // create a conditional
     // if i is divisble by 3 and 5 have it log fizzbuzz
     if (i % 15 === 0){
         console.log("fizzbuzz");
         // if it is divisible by 3, have it print out fizz
     } else if (i % 3 === 0){
         console.log("fizz");
         // if it is divisbile by 5 have it print our buzz instead
     } else if (i % 5 === 0){
         console.log("buzz");
     } else {
         // print out the numbers it is not divisble
         console.log(i);
     }
 }  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
// create a board with an empty string
let board = "";
// create a loop
// size will be our parameter to determine how large or small we want the board
for (let i = 0; i < size; i++ ){
    // within the loop, make another loop to fill in the the board
    for( let j = 0; j < size; j++){
        // with every other space, fill in with #
        // make a conditional for how to fill in the board
        // if the sum of i and j to be divisible 2 
        if((i + j) % 2 === 0){
        // fill it in with an string space
            board += " ";
        } else 
        // for every other fill in with #
            board += "#";        
    }
    // create a line break so it won't look like a long line of # # # #
        board += "\n";
}
    console.log(board);
}
console.log(drawChessboard(8));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
