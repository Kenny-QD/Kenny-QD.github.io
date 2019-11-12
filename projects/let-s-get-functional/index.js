// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-kennyqd");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use count flag
    let count = 0;
    _.filter(array, (e, i, c) => {
        // using filter to iterate through
        // looking for male gender
        if(e.gender === "male"){
            // every male count, increase by 1
            count++
        }
    })
    // return count
 return count;
};

var femaleCount = (array) => {
    // using reduce (to iterate through the gender)
    let female = _.reduce(array, (total, index, array) => {
        // conditional for the gender to be female
       if(index.gender === "female"){
           // increase total by 1
           total++;
       }
       
       return total;
    }, 0);
    return female;
};


var oldestCustomer = (array) => {
   let currentAge = 0;
   let old;
    let oldest = _.each(array,(customers, index, array) =>{
        if(currentAge < customers.age){
            currentAge = customers.age;
            old = customers.name;
        }
    });
    return old;
};

var youngestCustomer = (array) => {
    let currentAge = 100;
    let youngin;
    let youngest = _.each(array,(customers, index, array) => {
        if(currentAge > customers.age){
            currentAge = customers.age;
            youngin = customers.name;
        }
    });
    return youngin;
};

var averageBalance = (array) => {
    let balance = [];
    let avgBal = 0;
    balance = _.pluck(array, "balance");
    _.each(array, (amount, i, array) => {
        balance[i] = balance[i].slice(1).split(",").join("");
        balance[i] = parseFloat(balance[i]);
        avgBal += balance[i];
    });
    avgBal /= balance.length;
    return avgBal;
};

var firstLetterCount = (array, letter) =>{
    let count = 0;
    _.each(array, (e, i ,c) => {
        if (e.name[0].toLowerCase() === letter.toLowerCase()) {
            count ++;
        }
    });
    return count;
};

var friendFirstLetterCount = (array, customer, letter) => {
  let friendList = _.reduce(array, (total, current)=> {
       if(current.name.toLowerCase() === customer.toLowerCase()){
         total =  _.pluck(current.friends, 'name');
       }
       return total;
   }, []);
   let count = _.reduce(friendList, (total, current)=> {
       if(current[0].toLowerCase() === letter.toLowerCase()){
           total += 1;
       }
       return total;
   }, 0);
   return count;
};
var friendsCount = (array, name) => {
    let count = [];
    _.each(array, (e, i, c) => {
        if(e.name !== name){
            _.filter(e.friends, (friend, i, c) => {
                if(friend.name === name) {
                    count.push(e.name);
                }
            });
        }
    });
    return count;
}

var topThreeTags = (array) => {
    let tags = _.pluck(array, "tags");
    tags = tags.join().split(",");
    let counter = {};
    _.filter(tags, (e, i, c) => {
        if(counter.hasOwnProperty(e) === false){
            counter[e] = 0;
        }
        return counter[e] ++;
    });
    while(Object.keys(counter).length > 3){
        for(let key in counter){
            counter[key] -- ;
            if(counter[key] < 1){
                delete counter[key];
            }
        }
    }
    return Object.keys(counter);
};
var genderCount = (array) => {
    let genderCount = {};
    genderCount.male = _.reduce(array, (object, index, array) => {
        if(index.gender === 'male'){
            object++;
        }
        return object;
    }, 0);
    genderCount.female = _.reduce(array, (object, index, array) => {
        if(index.gender === 'female'){
            object++;
        }
        return object;
    }, 0);
    genderCount['non-binary'] = _.reduce(array, (object, index, array) => {
        if(index.gender === 'non-binary'){
            object++;
        }
        return object;
    }, 0);
    return genderCount;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
