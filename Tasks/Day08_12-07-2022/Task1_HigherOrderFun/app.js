//Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
function modifiedFood() {
  return foods.slice(1, 4);
}
console.log('Function #1: Array Slice => ', modifiedFood(foods));

//Function #2: Array Splice
const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods1.splice(2, 0, 'noodles', 'icecream');
console.log('Function #2: Array Splice => ', foods1);

//Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray) {
  let evenNumbers = numberArray.filter(function (num) {
    return num % 2 == 0;
  });
  return evenNumbers;
}
console.log('Function #3: Filter => ', isEven(numberArray));

//Function #3: Filter :: IsPrime
function isPrime(numberArray) {
  let primes = numberArray.filter(function (number) {
    for (var i = 2; i <= number; i++) {
      return number % i != 0;
    }
  });
  return primes;
}
console.log('Function #3: Filter :: IsPrime => ', isPrime(numberArray));

//Function #4: Reject
function nonPrime(numberArray) {
  let nonprimes = numberArray.filter(function (number) {
    for (var i = 2; i <= number; i++) {
      return number % i == 0;
    }
  });
  return nonprimes;
}
console.log('Function #4: Reject => ', nonPrime(numberArray));

//Function #5: Lambda
const isEvenLambda = (numberArray) =>
  numberArray.filter((number) => number % 2 == 0);
console.log('Function #5: Lambda => ', isEvenLambda(numberArray));

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
  let squares = myArray.map((item) => {
    return item * item;
  });
  return squares;
}
console.log('Function #6: Map => ', findSquareOfNumbers(myArray));

//Function #7: Reduce
const myArray1 = [2, 3, 5, 10];
function multiply(myArray1) {
  let multiplyvalues = myArray1.reduce(function (initial, item) {
    return initial * item;
  });
  return multiplyvalues;
}
console.log('Function #7: Reduce => ', multiply(myArray1));
