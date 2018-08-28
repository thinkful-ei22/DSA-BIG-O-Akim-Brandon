"use strict";

//Counting Sheep

function sheepCount(number) {
  if (number === 0) {
    return;
  }
  console.log(` ${number} - Another sheep jump over the fence`);
  sheepCount(number - 1);
}

/*
Best case: O(1), where the given number is 0

Worst case: O(N), runtime increases linearly in correlation with the size of the
  given number.
*/

function iterativeSheepCount(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} - Another sheep jump over the fence`);
  }
}

/*
Best case: O(1), where the given number is 0

Worst case: O(N), runtime increases linearly in correlation with the size of the
  given number.
*/

//////////////////////////////////////////////////////////////////////////////

//Array Double

function arrayDoubler(arr) {
  if (arr.length === 0) return [];
  else {
    let newArr = [];
    newArr = [2 * arr[0], ...arrayDoubler(arr.slice(1))];
    return newArr;
  }
}

/*
Best case: O(1) where the array length = 0
Worst Case: O(n) increasing linearly with size of given array. 
*/

function iterativeArrayDoubler(arr) {
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      arr = [arr[i] * 2, ...arr];
    }
  }
  return;
}

/*
Best case: 0(1) where array length is 1.
Worst Case: 0(n) increasing linearly with length of given array.
*/

//////////////////////////////////////////////////////////////////////////////

// REVERSE STRING

function stringReverser(str) {
  if (str === "") {
    return "";
  } else {
    let newStr = "";
    newStr = newStr + str.charAt(str.length - 1);

    return newStr + stringReverser(str.slice(0, str.length - 1));
    //return str.charAt(str.length-1) + stringReverser(arr.pop());
  }
}

/* 
Best Case: O(1) where given string is empty.
Worst Case: O(n) increasing with length of given string.
*/

function iterativeStringReverser(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str.charAt(i);
    // console.log(revStr);
  }
  return revStr;
}

/* 
Best Case: O(1) where given string is empty or 1 char long.
Worst Case: O(n) increasing with length of given string.
*/

//////////////////////////////////////////////////////////////////////////////

//Triangles

function triSequencer(number, increment = 2, results = []) {
  if (results.length === 0) {
    results.push(1);
  }
  if (results.length < number) {
    results = triSequencer(number, increment + 1, [
      ...results,
      results[results.length - 1] + increment
    ]);
  }

  return results;
}

/* 
Best Case: O(1) where given number is 0.
Worst Case: O(n) increasing with size of given number.
*/

function iterativeTriSequencer(num) {
  let results = [];
  let increment = 1;
  for (i = 0; i <= num; i++) {
    if (i === 0) {
      results.push(1);
      increment++;
    }
    results.push(results[i] + increment);
    increment++;
  }
  return results;
}

/* 
Best Case: O(1) where given number is 0.
Worst Case: O(n) increasing with size of given number.
*/

//////////////////////////////////////////////////////////////////////////////

//STRING SPLITTER
function splitString(str, char, newString = "", results = []) {
  if (str === char) {
    return "";
  }
  if (str.length === 0) {
    results.push(newString);
    return results;
  }
  if (str[0] === char) {
    results.push(newString);
    newString = "";
    return splitString(str.slice(1), char, newString, results);
  } else {
    newString += str[0];
    return splitString(str.slice(1), char, newString, results);
  }
}

/* 
Best Case: O(1) where given string is equal to given character.
Worst Case: O(n) increasing with size of given string, and every other character
  is the splitter.
*/

function iterateStringSplitter(str, separator) {
  let strArray = [];
  if (str === "") {
    return strArray;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== separator) {
        strArray.push(str[i]);
      } else {
        str = str.substring(i + 1);
        i = -1;
      }
    }
    return strArray;
  }
}

/* 
Best Case: O(1) where given string is empty.
Worst Case: O(n) increasing linearly with size of given string.
*/

///////////////////////////////////////////////////////////////////////////

function binaryRepresentation(decimal) {
  if (Math.floor(decimal / 2 === 0)) {
    return;
  } else {
    binary = (decimal % 2) + binary;
    return binary, binaryRepresentation(Math.floor(decimal / 2));
  }
}

/* 
Best Case: O(1) where given number is 0.
Worst Case: O(n) increasing linearly with size of given number.
*/

function iterativeBinaryRepresentation(decimal) {
  let binary = "";

  while (Math.floor(decimal / 2 !== 0)) {
    binary = (decimal % 2) + binary;
    // console.log(binary);
    decimal = Math.floor(decimal / 2);
    console.log(decimal);
  }
  return binary;
}

/* 
Best Case: O(1) where given number is 0.
Worst Case: O(n) increasing linearly with size of given number.
*/

///////////////////////////////////////////////////////////////////////////

//FACTORIAL

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

/* 
Best Case: O(1) where given number = 1.
Worst Case: O(n) increasing with size of given number
*/

function iterativeFactorial(num) {
  let result = num;
  if (num > 0) {
    for (let i = num - 1; i > 1; i--) {
      result = result * i;
    }
    return result;
  }
  return null;
}

/* 
Best Case: O(1) where given number <= 1.
Worst Case: O(n) increasing with size of given number
*/
///////////////////////////////////////////////////////////////////////////////

//FIBONACCI

function fibonacciGo(num, results) {
  if (num === 0) {
    return;
  }

  if (num === 1) {
    return [0, 1];
  }

  //let start = [ 1, 1, 2];
  else {
    results = fibonacciGo(num - 1);
    let newNum = results[results.length - 1] + results[results.length - 2];
    results.push(newNum);
    return results;
  }
}

/* 
Best Case: O(1) where given number 0.
Worst Case: O(n) increasing with size of given number
*/

function iterativeFibonacci(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    // we’re adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it’s the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/* 
Best Case: O(1) where given number 0.
Worst Case: O(n) increasing with size of given number
*/

////////////////////////////////////////////////////////////////////////////////

//ANAGRAM

function anagram(str) {
  let arr = [];

  if (str.length === 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i++) {
    console.log(str.replace(str[i], ""));
    const result = anagram(str.replace(str[i], ""));
    console.log(result);
    result.forEach(substring => {
      arr.push(str[i] + substring);
    });
  }
  return arr;
}

/* 
Best Case: O(1) where given string is empty.
Worst Case: O(log(n)) increasing logarithmically. The function is called
  repeatedly but with a shorter string each time
*/

///////////////////////////////////////////////////////////////////////////////

//animals:
const animalHierarchy = [
  { id: "Animals", parent: null },
  { id: "Mammals", parent: "Animals" },
  { id: "Dogs", parent: "Mammals" },
  { id: "Cats", parent: "Mammals" },
  { id: "Golden Retriever", parent: "Dogs" },
  { id: "Husky", parent: "Dogs" },
  { id: "Bengal", parent: "Cats" }
];

function traverseAnimals(animalHierarchy, parent) {
  let node = {};
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(
      item => (node[item.id] = traverseAnimals(animalHierarchy, item.id))
    );
  return node;
}

/* 
Best Case: O(n) where given parent is of the lowest tier of parents.
Worst Case: O(log(n)) increasing logarithmically. where parent is of the 
  highest tier of parents The function is called repeatedly but with fewer 
  remaining objects each time.
*/
console.log(traverseAnimals(animalHierarchy, null));

///////////////////////////////////////////////////////////////////////////////

organization:
const facebookHierarchy = [
  {id:'Zuckerberg', boss: null},
  {id:'Schrepher', boss:'Zuckerberg'},
  {id:'Schrage', boss:'Zuckerberg'},
  {id:'Sandberg', boss:'Zuckerberg'},
  {id:'Bosworth', boss:'Schrepher' },
  {id:'Zhao', boss:'Schrepher'},
  {id:'VanDyck', boss:'Schrage'},
  {id:'Swain', boss:'Schrage'},
  {id:'Goler', boss:'Sandberg'},
  {id:'Hernandez', boss:'Sandberg'},
  {id:'Moissinac', boss:'Sandberg'},
  {id:'Kelley', boss:'Sandberg'},
  {id:'Steve', boss:'Bosworth'},
  {id:'Kyle', boss:'Bosworth'},
  {id:'Andra', boss:'Bosworth'},
  {id:'Richie', boss:'Zhao'},
  {id:'Sofia', boss:'Zhao'},
  {id:'Jen', boss:'Zhao'},
  {id:'Sabrina', boss:'VanDyck'},
  {id:'Michelle', boss:'VanDyck'},
  {id:'Josh', boss:'VanDyck'},
  {id:'Blanch', boss:'Swain'},
  {id:'Tom', boss:'Swain'},
  {id:'Joe', boss:'Swain'},
  {id:'Eddie', boss:'Goler'},
  {id:'Julie', boss:'Goler'},
  {id:'Annie', boss:'Goler'},
  {id:'Rowi', boss:'Hernandez'},
  {id:'Inga', boss:'Hernandez'},
  {id:'Morgan', boss:'Hernandez'},
  {id:'Amy', boss:'Moissinac'},
  {id:'Chuck', boss:'Moissinac'},
  {id:'Vinni', boss:'Moissinac'},
  {id:'Eric', boss:'Kelley'},
  {id:'Ana', boss:'Kelley'},
  {id:'Wes', boss:'Kelley'},
];

function traverseFacebook(facebookHierarchy, boss) {
  let node = {};
  facebookHierarchy.filter(item => item.boss === boss)
    .forEach(item => node[item.id] = traverseFacebook(facebookHierarchy, item.id));
  return node;
}

/* 
Best Case: O(n) where given boss is of the lowest tier of bosses.
Worst Case: O(log(n)) increasing logarithmically. where boss is of the 
  highest tier of bosses The function is called repeatedly but with fewer 
  remaining objects each time.
*/