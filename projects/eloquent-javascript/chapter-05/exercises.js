// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// make into one array
function flatten(array) {
// loop
for (var i = 0; i <array.length; i++){
  if(array[i] instanceof Array){
    // merge spliced values into one array
    Array.prototype.splice.apply(array, [i,1].concat(array[i]))
  }
}
return array;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  // run the test function on loop
  // stop if it becomes false
for (var value = start; test(value); value = update(value)) {
  body(value);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, func) {
let result = true;
if(func === undefined) {
  each(collection, function(element, index, collection) {
    if(!element) {
      result = false;
    }
  });
} else {
  each(collection, function(element, index, collection) {
    if(!func(element, index, collection)) {
      result = false;
    }
  });
}
return result;
};

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
let counted = countBy(text, i => { 
    //loops through each letter of the text and creates an array with the name 
    //"ltr", "rtl", or "ttb" or adds to the counter of said array.
    let script = characterScript(i.codePointAt(0)); 
    //stores the object in script variable or returns false if there is no object
    return script ? script.direction : "none"; 
    //Uses ternary to either return "none" or it returns the script direction
    })
  .filter(({name}) => name != "none"); 
  //filters out objects whose name property is "none"
  if (counted.length == 0) return "ltr";
  //reduce loops over the counted var and return the array.name
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
}
function each(collection, action){
  if(Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      action(collection[i], i, collection);
    }
  } else {
    for(var key in collection){
      action(collection[key], key, collection);
    }
  } return collection;
  
}