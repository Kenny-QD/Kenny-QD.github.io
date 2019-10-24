//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*globals key */
/*eslint-disable no-native-reassign, no-else-return, no-param-reassign, no-shadow-global*/
let objectValues = (object) => {
let arrb = [];
for (key in object){
    arrb.push(object[key]);
}
return arrb;
} ;

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

let keysToString = (object) => {
let hold = Object.keys(object);
return hold.join(" ");

};

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

let valuesToString = (object) => {
    let arr = [];
    for(key in object){
        if (typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }
    return arr.join(" ");
};

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return 'array';
    } else if (typeof collection === 'object'){
        return 'object';
    } else {
        return 'not in collection';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

let capitalizeWord = (string) => string.charAt(0).toUpperCase() + string.slice(1);

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 string = string.split(" ");
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
let mess = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return "Welcome " + mess + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
let spec = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return name + " is a " + spec;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(" ");
} else {
    return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if (string.includes(word) === true){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
if (Array.isArray(object.friends) === true){
    object.friends.push(name);
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if( object.hasOwnProperty("friends") && object.friends.includes(name)){
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create a binding for non friends
let rejects = [];
for (let i = 0; i < array.length; i++){
    if (name !== array[i].name){
        if(!array[i].friends.includes(name)){
            rejects.push(array[i].name);
        }      
    }
}
return rejects;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (key in object){
    if( array.includes(key)){
        delete object[key];
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
for (let i = 0; i < array.length; i++){
    for (let k = i + 1; k < array.length; k++){
        if (array[k] === array[i]){
            array.splice(k, 1);
            k--;
        }
    }
}
return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}