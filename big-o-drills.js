/*
1. EVEN OR ODD

This function takes a value and checks to see if it's even
*/

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}

//Big O Result...
//Best case, avg case, and worst case are the same.
//O(1). No matter how large the value gets, only one operation is required.

///////////////////////////////////////////////////////////////////////////////

/*
2. ARE YOU HERE?

Plain english : This function checks to see if any of the values in two
arrays match.

Technical : Given two arrays, this function loops through the first array,
checking if each value can be found in the second array using a nested loop.
it returns true if any of the values match, else, it returns false.
*/

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Big O result...
/*
Best case: O(1), if the first value of each array matches, the function will
terminate after the first check in the second loop, regardless of the size of 
the arrays.
*/
/*
Worst case: In the worst case, the runtime is O(n^2), due to the nested for loop
*/

/////////////////////////////////////////////////////////////////////////////

/*
3: DOUBLER

Plain English : doubles all the values in an array
Technical : Loops through a given array, and multiplies each value by 2, 
  returning the array
*/

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//Big O result...
/*
Best case: O(1), where the array only contains one value to be doubled
*/
/*
Worst case: O(n) runtime increases linearly, in direct proportion with the
  size of the given array
*/

///////////////////////////////////////////////////////////////////////////////

/*
4. NAIVE SEARCH

Plain english : Function checks to see if an item is in the array.
Technical : Function loops through a given array, and checks each item to see if
  it matches the given item. If so, it returns the index of the first matching
  item.
*/

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//Big O result...
/*
Best case: O(1), where the first item in the array matches, the function 
  terminates regardless of the length of the given array.
*/
/*
Worst case: O(n) runtime increases linearly, in direct proportion with the
  size of the given array, and the last item is the matching item, or no items
  match.
*/

//////////////////////////////////////////////////////////////////////////////

/*
5. Creating Pairs

Plain english : Function checks to see if an item is in the array.
Technical : Function loops through a given array, and checks each item to see if
  it matches the given item. If so, it returns the index of the first matching
  item.
*/

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//Big O result...
/*
Best case: O(1), where there are only two items in the given array, so only
  one operation is required
*/
/*
Worst case: O(n^2) runtime increases polynomially in relation to the length 
  of the given array, due to the nested for loop.
*/

///////////////////////////////////////////////////////////////////////////////

/*
6. Computing Fibonacci's

Plain english : Function generates a Fibonacci sequence.
Technical : Function loops a given number of times, pushing a new number
  of the Fibonacci sequence into a "result" array each time.
*/

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
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

//Big O result...
/*
Best case: O(1), where the given number is 1. Only one operation is required.
*/
/*
Worst case: O(n) runtime increases linearly in direct correlation with the size
  of the given number.
*/

///////////////////////////////////////////////////////////////////////////////

/*
7. AN EFFICIENT SEARCH

Plain english : Function finds an item in an array
Technical : Function searches for the given item in an array by dividing the 
  array in half each iteration, and comparing the value of the given item to 
  the midpoint of the array each time to determine which set of data to drop.
*/

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//Big O result...
/*
Best case: O(1), where the midpoint is the given item.
*/
/*
Worst case: O(log(n)) runtime increases logarithmically in  correlation with the 
  size of the given array. Applies where the item is equal to the midpoint +-1.
*/

///////////////////////////////////////////////////////////////////////////////

/*
8. RANDOM ELEMENT

Plain english/Technical : Function finds an item at a random index in a given array
*/

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Big O result...
/*
Best case and Worst case are O(1). Regardless of the length of the given array,
this function only ever does one operation.
*/

///////////////////////////////////////////////////////////////////////////////

/*
9. IS IT PRIME?

Plain english : Function checks if a given number is prime
*/

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

//Big O result...
/*
Best case: O(1), given number is 2
*/
/*
Worst case: O(n) runtime increases linearly in direct correlation with the size
  of the given number.
*/
