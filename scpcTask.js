//  TASK - 1
// --------
// This Function takes Strings as input and return reversed version of given strings

const reverseStrings = (inputText) => {
  let stringsContainer = "";
  for (let i = inputText.length - 1; i >= 0; i--) {
    stringsContainer += inputText[i];
  }
  return stringsContainer;
};

// Add your desired text here to see the reversed version
const yourText = "123";
const reversedValue = reverseStrings(yourText);
// console.log(reversedValue);

// -----------------------------

//  TASK - 2
// --------
// This Function takes array as input and return reversed total sum of array only with positive numbers

const arrayCalculator = (inputArrays) => {
  let sum = 0;
  for (let i = 0; i < inputArrays.length; i++) {
    if (inputArrays[i] > 0) {
      sum += inputArrays[i];
    }
  }
  return sum;
};

// add your desired arrays of number here
const myArray = [1, 2, 3, -6, -5];
const totalSum = arrayCalculator(myArray);
// console.log(totalSum);

// ---------------------------------

//  TASK - 3
// --------
// This Function is to find the most frequent element in an array and return it.

const frequentElement = (arr) => {
  let frequentNumbers = {};
  let maxFrequent = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    frequentNumbers[currentElement] =
      (frequentNumbers[currentElement] || 0) + 1;

    if (frequentNumbers[currentElement] > maxFrequent) {
      maxFrequent = frequentNumbers[currentElement];
      item = currentElement;
    }
  }
  return item;
};

const inputArrays = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = frequentElement(inputArrays);
// console.log(result);

// ----------------------------

//  TASK - 4
// --------
// This Function is to takes a sorted array of numbers and a target value as input.

const twoNumbersSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];

      if (sum == target) {
        return [i, j];
      }
    }
  }
  return [];
};

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 12;
const indicatesNumbers = twoNumbersSum(inputArray, targetValue);
// console.log(indicatesNumbers);
