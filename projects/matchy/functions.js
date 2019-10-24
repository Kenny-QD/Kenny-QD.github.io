/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var search = (animals, name) => {
    var name1 = name;
    for(var i = animals.length - 1; i >= 0; i--){
        var name2 = animals[i].name;
        if (name1 === name2){
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var replace = (animals, name, replacement) => {
    for (var i = 0; i < animals.length; i++){
        var currentAnimalName = animals[i].name;
        if( currentAnimalName === name){
            animals.splice(animals[i], 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var remove = (animals, name) => {
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(animals[i], 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals,animal){
    //make a conditional to test use hasOwnProperty and the given objects name and species to see if it is greater than 0 
    if (animal.hasOwnProperty("name") && animal.hasOwnProperty("species")&& animal.name.length > 0 && animal.species.length > 0) {
        // use if statement to call function and check if its equal to null
        if (search(animals,animal.name) === null) {
            //push method the new object to the animals array
            animals.push(animal);
        }   
    }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
