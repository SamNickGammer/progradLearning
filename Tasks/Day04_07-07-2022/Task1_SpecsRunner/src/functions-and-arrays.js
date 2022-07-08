// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
//!-------------------------------------------------------------------------------------------------
// Progression #2: The lengthy word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];
function findScaryWord(words) {
  let longest = words[0];
  if (words.length == 0) {
    return null;
  }
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
//!------------------------------------------------------------------------------------------------------
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//!--------------------------------------------------------------------------------------------------
// Progression #4: Calculate the average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function add(numbersAvg) {
  let sum = 0;
  for (i = 0; i < numbersAvg.length; i++) {
    if (typeof numbersAvg[i] === 'number') {
      sum += numbersAvg[i];
    } else if (typeof numbersAvg[i] == 'string') {
      sum += numbersAvg[i].length;
    } else if (numbersAvg[i] == true) {
      sum += 1;
    } else if (numbersAvg[i] == false) {
      sum += 0;
    } else throw Error("Unsupported data type sir or ma'am");
  }
  return sum;
}

// Progression 4.1: Array of numbers
function midPointOfLevels(numbersAvg) {
  let sum = 0;
  if (numbersAvg.length == 0) {
    return null;
  } else {
    for (let i = 0; i < numbersAvg.length; i++) {
      sum = sum + numbersAvg[i];
    }
  }
  return sum / numbersAvg.length;
}

// Progression 4.2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

function averageWordLength(wordsArr) {
  let sum = 0;
  if (wordsArr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      sum = sum + wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour',
];

function uniqueArray(wordsUnique) {
  let unique = [];
  if (wordsUnique.length == 0) {
    return null;
  } else {
    for (let i = 0; i < wordsUnique.length; i++) {
      if (!unique.includes(wordsUnique[i])) {
        unique.push(wordsUnique[i]);
      }
    }
    return unique;
  }
}

// Progression #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function searchElement(wordsFind, word) {
  if (wordsFind.length == 0) {
    return null;
  }
  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] === word) {
      return true;
    }
  }
  return false;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

function howManyTimesElementRepeated(wordsCount, word) {
  let count = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === word) {
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];
function maximumProduct(matrix) {
  return 1;
}

//Mixed Arrays
function avg(mixedArr) {
  let sum = 0;
  if (mixedArr.length == 0) {
    return null;
  }
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] == 'string') {
      sum += mixedArr[i].length;
    } else if (mixedArr[i] == true) {
      sum += 1;
    } else if (mixedArr[i] == false) {
      sum += 0;
    } else {
      sum += mixedArr[i];
    }
  }
  var result = parseFloat((sum / mixedArr.length).toFixed(2));
  return result;
}
